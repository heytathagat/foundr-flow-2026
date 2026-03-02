const testEnvironmentVariables = async () => {
  console.log('🔧 Testing Environment Variables in Next.js Context...\n')
  
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Env Test User',
        email: 'test@example.com',
        company: 'Env Test',
        message: 'Testing if environment variables are loaded correctly in Next.js'
      })
    })

    const result = await response.json()
    console.log('Form submission result:', result.success)
    
    if (result.success) {
      console.log('✅ Form submitted successfully')
      console.log('📊 Check server console for email sending details')
    } else {
      console.log('❌ Form submission failed')
      console.log('Error:', result.error)
    }
    
  } catch (error) {
    console.error('Test Error:', error)
  }
}

testEnvironmentVariables()
