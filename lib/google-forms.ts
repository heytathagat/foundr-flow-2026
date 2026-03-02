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

    return { success: true, data: response.data }
  } catch (error) {
    console.error('Google Sheets submission error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function submitToGoogleFormsDirect(formData: {
  name: string
  email: string
  company?: string
  message: string
}) {
  try {
    // Alternative: Direct Google Forms submission
    const formUrl = `https://docs.google.com/forms/d/${GOOGLE_FORM_ID}/formResponse`
    
    const formDataEntries = new URLSearchParams()
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

    return { success: response.status < 400 }
  } catch (error) {
    console.error('Google Forms submission error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
