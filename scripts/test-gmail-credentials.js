// Load environment variables from .env.local
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env.local') })

const nodemailer = require('nodemailer')

const testGmailCredentials = async () => {
  console.log('🔧 Testing Gmail Credentials...\n')
  
  console.log('EMAIL_USER:', process.env.EMAIL_USER)
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***CONFIGURED***' : 'NOT SET')
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('❌ ERROR: Environment variables not loaded properly')
    console.log('📁 Check that .env.local exists and contains:')
    console.log('   EMAIL_USER=foundrflowindia@gmail.com')
    console.log('   EMAIL_PASS=your-16-character-app-password')
    return
  }
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    console.log('\n🔄 Testing Gmail connection...')
    
    // Test connection
    await transporter.verify()
    
    console.log('✅ SUCCESS: Gmail credentials are working!')
    
    // Test sending email
    const testEmail = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to self for testing
      subject: '📧 Test Email - Foundr Flow Forms',
      html: `
        <h2>Test Email Successful!</h2>
        <p>This is a test to verify that your Gmail configuration is working correctly.</p>
        <p>If you receive this email, your forms will be able to send notifications!</p>
        <hr>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    })
    
    console.log('📨 Test email sent successfully!')
    console.log('📬 Check your inbox at:', process.env.EMAIL_USER)
    
  } catch (error) {
    console.log('❌ FAILED: Gmail credentials issue')
    console.log('Error:', error.message)
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 Solutions:')
      console.log('1. Verify 2-factor authentication is enabled')
      console.log('2. Generate a new app password: https://myaccount.google.com/apppasswords')
      console.log('3. Make sure no spaces in the app password')
      console.log('4. Check that EMAIL_USER and EMAIL_PASS are correct')
    }
  }
}

testGmailCredentials()
