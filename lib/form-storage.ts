import fs from 'fs'
import path from 'path'
import { getSubmissionsFromGoogle } from './google-forms'

const SUBMISSIONS_FILE = path.join(process.cwd(), 'data', 'submissions.json')

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.dirname(SUBMISSIONS_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

export async function saveSubmission(formData: {
  name: string
  email: string
  company?: string
  message: string
  timestamp: string
}) {
  try {
    // Try Google Sheets first (primary storage)
    const googleResult = await submitToGoogleForm(formData)
    
    if (googleResult.success) {
      console.log('Submission saved to Google Sheets (primary storage)')
      return { success: true, storage: 'google', data: googleResult }
    }
    
    // Fallback to local storage if Google fails
    console.log('Google Sheets failed, using local backup')
    return await saveSubmissionLocally(formData)
    
  } catch (error) {
    console.error('Storage error:', error)
    // Final fallback to local storage
    return await saveSubmissionLocally(formData)
  }
}

export async function saveSubmissionLocally(formData: {
  name: string
  email: string
  company?: string
  message: string
  timestamp: string
}) {
  try {
    ensureDataDir()
    
    let submissions: any[] = []
    
    // Read existing submissions
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      try {
        const data = fs.readFileSync(SUBMISSIONS_FILE, 'utf8')
        submissions = JSON.parse(data)
      } catch (parseError) {
        // If file is corrupted, start fresh
        console.log('Submissions file corrupted, starting fresh')
        submissions = []
      }
    }
    
    // Add new submission
    submissions.push({
      ...formData,
      id: Date.now().toString(),
      status: 'pending'
    })
    
    // Save back to file with proper encoding
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf8')
    
    return { success: true, storage: 'local' }
  } catch (error) {
    console.error('Local storage error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Import submitToGoogleForm at the top to avoid circular dependency
async function submitToGoogleForm(formData: any) {
  const { submitToGoogleForm } = await import('./google-forms')
  return submitToGoogleForm(formData)
}

export async function getSubmissions() {
  try {
    // Try to get from Google Sheets first
    const googleSubmissions = await getSubmissionsFromGoogle()
    
    if (googleSubmissions.length > 0) {
      console.log(`Found ${googleSubmissions.length} submissions from Google Sheets`)
      return googleSubmissions
    }
    
    // Fallback to local storage
    console.log('No Google Sheets data, using local storage')
    return await getSubmissionsLocal()
    
  } catch (error) {
    console.error('Error reading submissions:', error)
    // Final fallback to local storage
    return await getSubmissionsLocal()
  }
}

export async function getSubmissionsLocal() {
  try {
    if (!fs.existsSync(SUBMISSIONS_FILE)) {
      return []
    }
    
    const data = fs.readFileSync(SUBMISSIONS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading local submissions:', error)
    return []
  }
}

export async function updateSubmissionStatus(id: string, status: string) {
  try {
    // For Google Sheets, you'd need to implement update functionality
    // For now, we'll update local storage as backup
    const submissions = await getSubmissionsLocal()
    const submission = submissions.find((s: any) => s.id === id)
    
    if (submission) {
      submission.status = status
      fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf8')
      return { success: true }
    }
    
    return { success: false, error: 'Submission not found' }
  } catch (error) {
    console.error('Error updating submission:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
