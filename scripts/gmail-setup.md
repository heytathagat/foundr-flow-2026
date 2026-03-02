# Gmail App Password Setup Guide

## 📧 Step-by-Step Instructions

### Step 1: Enable 2-Factor Authentication
1. Go to: https://myaccount.google.com/security
2. Find "2-Step Verification" 
3. Click "Turn on" if not already enabled
4. Follow the setup process

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. You might need to sign in again
3. Under "Select app", choose "Other (Custom name)"
4. Name it: "Foundr Flow Forms"
5. Click "Generate"
6. **Copy the 16-character password** (it looks like: xxxx xxxx xxxx xxxx)

### Step 3: Update Environment Variables
Edit your `.env.local` file:

```env
EMAIL_USER=hello@foundrflow.in
EMAIL_PASS=the-16-character-password-you-copied
```

**Important:** Remove any spaces from the app password!

### Step 4: Restart Development Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### Step 5: Test Email Functionality
Visit: http://localhost:3000/contact
Fill out the form and check if:
- ✅ You receive email at hello@foundrflow.in
- ✅ User receives confirmation email
- ✅ Form still saves locally

## 🔧 Troubleshooting

### "Invalid credentials" Error
- Double-check the app password (no spaces)
- Make sure 2-factor is enabled
- Try generating a new app password

### "Less secure app access" Error
- App passwords work with 2-factor enabled
- Don't need to enable "Less secure app access"

### Email Not Sending
- Check Gmail spam folder
- Verify hello@foundrflow.in can receive emails
- Check server console for error messages

## 📱 What Emails Are Sent

### 1. Admin Email (to hello@foundrflow.in)
- New contact form submission
- User details and message
- Timestamp and submission info

### 2. User Confirmation Email
- Thank you message
- Copy of their submission
- Links to website resources
- Professional branding

## ✅ Once Working

Your forms will have **triple backup**:
1. ✅ Local JSON file
2. ✅ Email notifications  
3. ✅ Optional Google Forms integration

## 🎯 Quick Test

After setup, test with:
- **Name**: Test User
- **Email**: your-personal-email@gmail.com
- **Message**: Test email functionality

You should receive both admin and user emails!
