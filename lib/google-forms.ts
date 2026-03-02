import { google } from 'googleapis'

const GOOGLE_FORM_ID = process.env.GOOGLE_FORM_ID
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID

export async function submitToGoogleForm(formData: {
  name: string
  email: string
  company?: string
  message: string
  timestamp: string
}) {
  try {
    // If Google Sheets credentials are configured, use Sheets API
    if (GOOGLE_SHEET_ID && process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      return await submitToGoogleSheets(formData)
    }
    // Otherwise, try direct Google Forms submission
    else if (GOOGLE_FORM_ID) {
      return await submitToGoogleFormsDirect(formData)
    }
    else {
      return { success: false, error: 'Google Forms not configured' }
    }
  } catch (error) {
    console.error('Google Forms submission error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function submitToGoogleSheets(formData: {
  name: string
  email: string
  company?: string
  message: string
  timestamp: string
}) {
  try {
    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Append data to Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            formData.timestamp,
            formData.name,
            formData.email,
            formData.company || '',
            formData.message
          ]
        ]
      }
    })

    console.log('Google Sheets submission successful:', response.data)
    return { success: true, data: response.data }
  } catch (error) {
    console.error('Google Sheets submission error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function submitToGoogleFormsDirect(formData: {
  name: string
  email: string
  company?: string
  message: string
  timestamp: string
}) {
  try {
    // Direct Google Forms submission
    const formUrl = `https://docs.google.com/forms/d/${GOOGLE_FORM_ID}/formResponse`
    
    const formDataEntries = new URLSearchParams()
    // These are default entry IDs - you'll need to get the actual IDs from your form
    formDataEntries.append('entry.2005620554', formData.name) // Name field ID
    formDataEntries.append('entry.1045781291', formData.email) // Email field ID
    formDataEntries.append('entry.1065046570', formData.company || '') // Company field ID
    formDataEntries.append('entry.1166974658', formData.message) // Message field ID

    const response = await fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataEntries.toString(),
      redirect: 'manual'
    })

    console.log('Google Forms submission status:', response.status)
    return { success: response.status < 400 }
  } catch (error) {
    console.error('Google Forms submission error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function getSubmissionsFromGoogle() {
  try {
    if (!GOOGLE_SHEET_ID || !process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      return []
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E',
    })

    const rows = response.data.values || []
    
    // Convert rows to submission objects
    const submissions = rows.slice(1).map((row, index) => ({
      id: (Date.now() - index).toString(),
      timestamp: row[0] || '',
      name: row[1] || '',
      email: row[2] || '',
      company: row[3] || '',
      message: row[4] || '',
      status: 'pending'
    }))

    return submissions.reverse() // Most recent first
  } catch (error) {
    console.error('Error reading from Google Sheets:', error)
    return []
  }
}
