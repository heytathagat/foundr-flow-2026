const testEmailThroughAPI = async () => {
  console.log('📧 Testing Email Through API...\n')
  
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Email Test User',
        email: 'heytathagat@gmail.com', // Your email for testing
        company: 'Email Test Company',
        message: 'This is a test to verify email functionality is working. If you receive this email at foundrflowindia@gmail.com, the system is working perfectly!'
      })
    })

    console.log(`Status Code: ${response.status}`)
    console.log(`Status Text: ${response.statusText}`)
    
    const result = await response.json()
    console.log('Response Body:', JSON.stringify(result, null, 2))
    
    if (result.success) {
      console.log('\n✅ SUCCESS: Form submitted successfully!')
      console.log('📨 Check your email at foundrflowindia@gmail.com')
      console.log('📨 Check user email at heytathagat@gmail.com')
      console.log('📊 Local backup should also be saved')
      
      console.log('\n🔍 What to check:')
      console.log('1. Admin email at foundrflowindia@gmail.com')
      console.log('2. User confirmation at heytathagat@gmail.com')
      console.log('3. Server console for email status')
      console.log('4. Local backup in data/submissions.json')
      
    } else {
      console.log('❌ FAILED: Form submission failed')
      console.log('Error details:', result.details)
    }
    
  } catch (error) {
    console.error('Test Error:', error)
  }
}

testEmailThroughAPI()
