const testContactForm = async () => {
  try {
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

    const result = await response.json()
    console.log('Contact Form Test Result:', result)
    return result.success
  } catch (error) {
    console.error('Contact Form Test Error:', error)
    return false
  }
}

const testPartnerApplication = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/partner-application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        organization: 'Test Organization',
        contactPerson: 'Test Contact',
        email: 'partner@test.com',
        phone: '+91 98765 43210',
        website: 'https://testorg.com',
        partnershipType: 'ecosystem',
        description: 'We are a test organization focused on helping Tier 2 & Tier 3 founders build successful startups.',
        currentStage: 'We have helped 50+ founders in the last year.',
        targetAudience: 'Early-stage founders in Tier 2 & Tier 3 cities across India.'
      })
    })

    const result = await response.json()
    console.log('Partner Application Test Result:', result)
    return result.success
  } catch (error) {
    console.error('Partner Application Test Error:', error)
    return false
  }
}

const runTests = async () => {
  console.log('🧪 Testing Form System...\n')
  
  console.log('1. Testing Contact Form...')
  const contactSuccess = await testContactForm()
  console.log(`Contact Form: ${contactSuccess ? '✅ PASS' : '❌ FAIL'}\n`)
  
  console.log('2. Testing Partner Application...')
  const partnerSuccess = await testPartnerApplication()
  console.log(`Partner Application: ${partnerSuccess ? '✅ PASS' : '❌ FAIL'}\n`)
  
  if (contactSuccess && partnerSuccess) {
    console.log('🎉 All tests passed! Forms are working correctly.')
    console.log('📊 Check the following:')
    console.log('   - Local backup: data/submissions.json')
    console.log('   - Admin dashboard: http://localhost:3000/admin/submissions')
    console.log('   - Email notifications (if configured)')
  } else {
    console.log('⚠️  Some tests failed. Check the server logs.')
  }
}

runTests()
