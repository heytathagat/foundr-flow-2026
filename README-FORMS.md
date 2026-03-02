# Foundr Flow - Forms Backend Setup

## 🚀 Complete Form System

This repository now includes a comprehensive form backend system with:

### ✅ Features
- **Contact Form** - Basic inquiries and founder applications
- **Partner Application** - Detailed partnership applications
- **Google Forms Integration** - Automatic submission to Google Sheets
- **Email Notifications** - Instant email alerts for new submissions
- **Local Backup** - JSON file backup of all submissions
- **Admin Dashboard** - View and manage submissions at `/admin/submissions`

## 📁 File Structure

```
├── app/
│   ├── api/
│   │   ├── contact/route.ts          # Contact form API
│   │   └── partner-application/route.ts  # Partner application API
│   ├── admin/
│   │   └── submissions/page.tsx      # Admin dashboard
│   ├── contact/page.tsx              # Contact form page
│   └── partner-application/page.tsx  # Partner application page
├── components/
│   ├── forms/
│   │   └── partner-application.tsx   # Partner application form
│   └── site/
│       └── contact-form.tsx          # Contact form component
├── lib/
│   ├── google-forms.ts               # Google Forms/Sheets integration
│   ├── email-service.ts              # Email sending service
│   └── form-storage.ts             # Local storage system
└── data/
    └── submissions.json              # Local backup (auto-created)
```

## 🔧 Setup Instructions

### 1. Environment Variables
Copy `.env.example` to `.env.local` and configure:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password

# Google Forms/Sheets Integration (Optional but recommended)
GOOGLE_FORM_ID=your-google-form-id
GOOGLE_SHEET_ID=your-google-sheet-id
GOOGLE_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### 2. Gmail Setup
1. Enable 2-factor authentication on Gmail
2. Generate an App Password: Google Account → Security → App passwords
3. Use this password for `EMAIL_PASS`

### 3. Google Forms Setup (Optional)
Follow the detailed guide in `scripts/setup-google-forms.md`

### 4. Install Dependencies
```bash
npm install
```

### 5. Start Development
```bash
npm run dev
```

## 📊 Form Endpoints

### Contact Form
- **URL**: `/api/contact`
- **Fields**: name, email, company, message
- **Page**: `/contact`

### Partner Application
- **URL**: `/api/partner-application`
- **Fields**: organization, contactPerson, email, phone, website, partnershipType, description, currentStage, targetAudience
- **Page**: `/partner-application`

### Admin Dashboard
- **URL**: `/admin/submissions`
- **Features**: View all submissions, copy messages, reply via email

## 🔄 Data Flow

1. **Form Submission** → API endpoint
2. **Validation** → Zod schema validation
3. **Local Backup** → Save to `data/submissions.json`
4. **Email Notification** → Send to admin and user
5. **Google Forms** → Submit to Google Sheet (if configured)
6. **Success Response** → Show success message to user

## 🛠️ Customization

### Adding New Forms
1. Create new API route in `app/api/`
2. Create form component in `components/forms/`
3. Use existing services: `email-service.ts`, `form-storage.ts`, `google-forms.ts`

### Email Templates
Edit `lib/email-service.ts` to customize:
- Admin notification emails
- User confirmation emails
- Email styling and content

### Form Validation
Update Zod schemas in API route files to add/remove validation rules

## 🔒 Security Features

- **Input Validation** - Zod schema validation
- **Rate Limiting** - Can be added with Next.js middleware
- **CSRF Protection** - Built into Next.js forms
- **Input Sanitization** - Basic sanitization in validation

## 📱 Testing

1. Fill out forms at:
   - `/contact` - Basic contact form
   - `/partner-application` - Partner application

2. Check:
   - Email notifications
   - Google Sheet updates (if configured)
   - Local backup in `data/submissions.json`
   - Admin dashboard at `/admin/submissions`

## 🚨 Troubleshooting

### Emails Not Sending
- Check Gmail app password
- Verify `EMAIL_USER` and `EMAIL_PASS`
- Check console logs for errors

### Google Forms Not Working
- Verify Google Sheet sharing permissions
- Check service account credentials
- Ensure field IDs match your form

### Local Storage Issues
- Ensure `data/` directory is writable
- Check file permissions
- Verify JSON format in `submissions.json`

## 📈 Monitoring

- Check console logs for submission results
- Monitor email delivery
- Review Google Sheet for data consistency
- Use admin dashboard for quick overview

## 🔄 Backup Strategy

1. **Local JSON** - Immediate backup
2. **Google Sheets** - Cloud backup
3. **Email Notifications** - Human-readable backup
4. **Git Commits** - Code backup (not data)

## 🎯 Next Steps

1. Set up environment variables
2. Configure Google Forms (optional)
3. Test form submissions
4. Monitor admin dashboard
5. Customize email templates
6. Add rate limiting if needed

---

## 📞 Support

For issues with the form system:
1. Check console logs
2. Verify environment variables
3. Review setup documentation
4. Test each component individually

The system is designed to work even if some components fail - local storage ensures no data is lost!
