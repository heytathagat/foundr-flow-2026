# Google Forms & Sheets Integration Setup

## Step 1: Create Google Form
1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with these fields:
   - Name (Short answer)
   - Email (Short answer)
   - Company (Short answer, optional)
   - Message (Paragraph)

## Step 2: Get Form ID
1. Save your form
2. The URL will be: `https://docs.google.com/forms/d/[FORM_ID]/edit`
3. Copy the `[FORM_ID]` part

## Step 3: Connect to Google Sheets
1. In your form, click "Responses" tab
2. Click the Google Sheets icon (green)
3. "Create new spreadsheet"
4. Name it something like "Foundr Flow Submissions"

## Step 4: Get Sheet ID
1. Open the created spreadsheet
2. The URL will be: `https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit`
3. Copy the `[SHEET_ID]` part

## Step 5: Create Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable "Google Sheets API"
4. Go to "IAM & Admin" → "Service Accounts"
5. Create service account
6. Download JSON key file
7. From the JSON file, copy:
   - `client_email`
   - `private_key`

## Step 6: Share Sheet with Service Account
1. Open your Google Sheet
2. Click "Share" button
3. Add the service account email
4. Give "Editor" permissions

## Step 7: Set Environment Variables
Create `.env.local` file with:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
GOOGLE_FORM_ID=your-form-id
GOOGLE_SHEET_ID=your-sheet-id
GOOGLE_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

## Step 8: Gmail App Password
1. Enable 2-factor authentication on Gmail
2. Go to Google Account settings
3. Security → App passwords
4. Generate new app password
5. Use this for EMAIL_PASS

## Alternative: Direct Form Submission
If you don't want to use Google Sheets API, you can use direct form submission:

1. Inspect your Google Form to get field entry IDs
2. Update `lib/google-forms.ts` with correct entry IDs
3. Only need GOOGLE_FORM_ID in environment

## Testing
1. Submit a test form on your website
2. Check:
   - Email notifications
   - Google Sheet updates
   - Local backup in `data/submissions.json`
