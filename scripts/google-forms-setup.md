# Google Forms & Sheets Setup for Online Storage

## 🎯 Goal: Move submissions from local JSON to online Google Sheets

### Step 1: Create Google Form (2 minutes)
1. Go to [Google Forms](https://forms.google.com)
2. Click "Create new form"
3. Add these fields:
   - **Name** (Short answer) - Required
   - **Email** (Short answer) - Required  
   - **Company** (Short answer) - Optional
   - **Message** (Paragraph) - Required

### Step 2: Get Form ID
1. Save your form
2. URL will be: `https://docs.google.com/forms/d/[FORM_ID]/edit`
3. Copy the `[FORM_ID]` part

### Step 3: Connect to Google Sheets
1. In your form, click "Responses" tab
2. Click the Google Sheets icon (green)
3. "Create new spreadsheet"
4. Name it: "Foundr Flow Submissions"

### Step 4: Get Sheet ID
1. Open the created spreadsheet
2. URL will be: `https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit`
3. Copy the `[SHEET_ID]` part

### Step 5: Create Google Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project or select existing
3. Enable "Google Sheets API"
4. Go to "IAM & Admin" → "Service Accounts"
5. Create service account
6. Download JSON key file
7. From JSON file, copy:
   - `client_email`
   - `private_key`

### Step 6: Share Sheet with Service Account
1. Open your Google Sheet
2. Click "Share" button
3. Add the service account email
4. Give "Editor" permissions

### Step 7: Update Environment Variables
Add to `.env.local`:
```env
GOOGLE_FORM_ID=your-form-id
GOOGLE_SHEET_ID=your-sheet-id
GOOGLE_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### Step 8: Test Online Storage
1. Restart server: `npm run dev`
2. Submit test form
3. Check Google Sheet for new entry

## 🎯 Alternative: Direct Google Forms Submission

If you don't want to use Google Sheets API:
1. Get field entry IDs from your Google Form
2. Update `lib/google-forms.ts` with correct IDs
3. Only need `GOOGLE_FORM_ID` in environment

## 📊 Benefits of Online Storage:
✅ **Accessible anywhere** - No local file dependencies
✅ **Automatic backups** - Google handles data safety  
✅ **Easy sharing** - Share sheet with team members
✅ **Data analysis** - Use Google Sheets features
✅ **Export options** - Download as CSV, Excel, etc
✅ **Real-time updates** - See submissions instantly

## 🔧 What We'll Configure:
- Google Forms API integration
- Google Sheets automatic population
- Fallback to local storage if online fails
- Admin dashboard reads from Google Sheets
- Export functionality for submissions
