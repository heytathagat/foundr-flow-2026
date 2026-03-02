import fs from 'fs'
import path from 'path'

const SUBMISSIONS_FILE = path.join(process.cwd(), 'data', 'submissions.json')

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.dirname(SUBMISSIONS_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
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
      const data = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8')
      submissions = JSON.parse(data)
    }
    
    // Add new submission
    submissions.push({
      ...formData,
      id: Date.now().toString(),
      status: 'pending'
    })
    
    // Save back to file
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2))
    
    return { success: true }
  } catch (error) {
    console.error('Local storage error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function getSubmissions() {
  try {
    if (!fs.existsSync(SUBMISSIONS_FILE)) {
      return []
    }
    
    const data = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading submissions:', error)
    return []
  }
}

export async function updateSubmissionStatus(id: string, status: string) {
  try {
    const submissions = await getSubmissions()
    const submission = submissions.find((s: any) => s.id === id)
    
    if (submission) {
      submission.status = status
      fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2))
      return { success: true }
    }
    
    return { success: false, error: 'Submission not found' }
  } catch (error) {
    console.error('Error updating submission:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
