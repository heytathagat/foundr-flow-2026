const testEmailConfig = async () => {
  console.log('📧 Testing Email Configuration...\n')
  
  try {
    const path = require('path')
    const { sendContactEmail } = require(path.join(__dirname, '../lib/email-service'))
    
    const testData = {
      name: 'Email Test User',
      email: 'test@example.com',
      company: 'Test Company',
      message: 'This is a test message to verify email functionality is working.'
    }
    
    console.log('🔄 Sending test email...')
    const result = await sendContactEmail(testData)
    
    if (result.success) {
      console.log('✅ SUCCESS: Email configuration is working!')
      console.log('📨 Admin email sent to: hello@foundrflow.in')
      console.log('📨 User confirmation sent to: test@example.com')
    } else {
      console.log('❌ FAILED: Email configuration has issues')
      console.log('Error:', result.error)
      
      if (result.error.includes('credentials')) {
        console.log('\n🔧 To fix this:')
        console.log('1. Follow: scripts/gmail-setup.md')
        console.log('2. Generate Gmail app password')
        console.log('3. Update EMAIL_PASS in .env.local')
        console.log('4. Restart server with: npm run dev')
      }
    }
    
  } catch (error) {
    console.log('❌ ERROR: Could not test email')
    console.log('Details:', error.message)
  }
}

testEmailConfig()
