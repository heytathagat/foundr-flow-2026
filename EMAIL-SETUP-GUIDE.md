# 📧 Email Setup Complete Guide

## ✅ What's Already Done:
- **Admin Email Updated**: `foundrflowindia@gmail.com` ✅
- **Environment Variables**: Configured ✅
- **Server Restarted**: Ready to test ✅

## 🔧 Final Steps (5 minutes):

### Step 1: Generate Gmail App Password
1. **Enable 2-Factor Authentication** (if not already):
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Other (Custom name)"
   - Name it: "Foundr Flow Forms"
   - Click "Generate"
   - **Copy the 16-character password** (format: xxxx xxxx xxxx xxxx)

### Step 2: Update Environment Variable
Edit your `.env.local` file:

```env
EMAIL_USER=foundrflowindia@gmail.com
EMAIL_PASS=the-16-character-password-you-copied
```

**Important**: Remove spaces from the app password!

### Step 3: Restart Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### Step 4: Test Email
Visit: http://localhost:3000/contact
Fill out the form and check:
- ✅ Email arrives at `foundrflowindia@gmail.com`
- ✅ User gets confirmation email
- ✅ Local backup still works

## 📊 Current Status:
- ✅ **Forms Working**: Submissions save locally
- ✅ **Admin Email**: Set to `foundrflowindia@gmail.com`
- ⚠️ **Email Password**: Need Gmail app password
- ✅ **Local Backup**: Always working

## 🎯 What Emails Will Be Sent:

### 1. Admin Email (to you at foundrflowindia@gmail.com)
```
Subject: New Contact Form Submission from [User Name]

Name: [User Name]
Email: [User Email]
Company: [Company Name]
Message: [User Message]
```

### 2. User Confirmation Email
```
Subject: Thank you for contacting Foundr Flow

Hi [User Name],
We've received your message and will get back to you soon.
```

## 🔧 Troubleshooting:

### "Missing credentials for PLAIN" Error
- Solution: Add correct Gmail app password to `EMAIL_PASS`

### Email Not Arriving
- Check spam folder
- Verify `foundrflowindia@gmail.com` can receive emails
- Check server console for errors

### Need to Regenerate Password
- Go back to: https://myaccount.google.com/apppasswords
- Delete old password
- Generate new one

## 🎉 Once Complete:
Your forms will have **triple backup**:
1. ✅ Local JSON file
2. ✅ Email notifications to you
3. ✅ User confirmation emails
4. ✅ Optional Google Forms integration

## 📱 Quick Test:
After setup, test with:
- **Name**: Test User
- **Email**: your personal email
- **Message**: Test email functionality

You should receive both admin and user emails! 🚀
