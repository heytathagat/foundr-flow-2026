const testContactFormDetailed = async () => {
  try {
    console.log('🧪 Testing Contact Form with Detailed Response...\n')
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        message: 'This is a test message from the form system setup.'
      })
    })

    console.log(`Status Code: ${response.status}`)
    console.log(`Status Text: ${response.statusText}`)
    
    const result = await response.json()
    console.log('Response Body:', JSON.stringify(result, null, 2))
    
    if (result.success) {
      console.log('✅ SUCCESS: Form submitted successfully!')
      
      // Check if data was saved locally
      const fs = require('fs')
      const path = require('path')
      const submissionsFile = path.join(process.cwd(), 'data', 'submissions.json')
      
      if (fs.existsSync(submissionsFile)) {
        const submissions = JSON.parse(fs.readFileSync(submissionsFile, 'utf-8'))
        console.log(`📊 Local submissions count: ${submissions.length}`)
        
        if (submissions.length > 0) {
          console.log('📋 Latest submission:')
          console.log(JSON.stringify(submissions[submissions.length - 1], null, 2))
        }
      }
    } else {
      console.log('❌ FAILED: Form submission failed')
      console.log('Error details:', result.details)
    }
    
    return result.success
  } catch (error) {
    console.error('Test Error:', error)
    return false
  }
}

testContactFormDetailed()
