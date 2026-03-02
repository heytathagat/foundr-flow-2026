const testFormWithEmail = async () => {
  console.log('📧 Testing Form with Email Configuration...\n')
  
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Email Test User',
        email: 'test@example.com',
        company: 'Email Test Company',
        message: 'This is a test to verify if email functionality is working with the current configuration.'
      })
    })

    console.log(`Status Code: ${response.status}`)
    console.log(`Status Text: ${response.statusText}`)
    
    const result = await response.json()
    console.log('Response Body:', JSON.stringify(result, null, 2))
    
    if (result.success) {
      console.log('✅ SUCCESS: Form submitted successfully!')
      console.log('📊 Check if email was sent:')
      console.log('   - Admin email: hello@foundrflow.in')
      console.log('   - User email: test@example.com')
      
      // Check server logs for email status
      console.log('\n📋 Check the server console for email sending details')
      console.log('   Look for messages like "Email sending error" or email success logs')
      
    } else {
      console.log('❌ FAILED: Form submission failed')
      console.log('Error details:', result.details)
      
      if (result.details?.email?.includes('credentials')) {
        console.log('\n🔧 Email Setup Needed:')
        console.log('1. Follow the guide: scripts/gmail-setup.md')
        console.log('2. Generate Gmail app password')
        console.log('3. Update EMAIL_PASS in .env.local')
        console.log('4. Restart the server')
      }
    }
    
  } catch (error) {
    console.error('Test Error:', error)
  }
}

testFormWithEmail()
