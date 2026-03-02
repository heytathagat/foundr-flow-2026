const testGoogleForms = async () => {
  console.log('🌐 Testing Google Forms Integration...\n')
  
  try {
    const { submitToGoogleForm } = require('../lib/google-forms')
    
    const testData = {
      name: 'Google Forms Test User',
      email: 'test@example.com',
      company: 'Test Company',
      message: 'This is a test to verify Google Forms integration is working.',
      timestamp: new Date().toISOString()
    }
    
    console.log('🔄 Testing Google Forms submission...')
    const result = await submitToGoogleForm(testData)
    
    if (result.success) {
      console.log('✅ SUCCESS: Google Forms submission worked!')
      console.log('📊 Check your Google Sheet for new entry')
      console.log('📋 Form ID:', process.env.GOOGLE_FORM_ID)
      console.log('📋 Sheet ID:', process.env.GOOGLE_SHEET_ID)
    } else {
      console.log('❌ FAILED: Google Forms submission failed')
      console.log('Error:', result.error)
      
      if (result.error.includes('not configured')) {
        console.log('\n🔧 To fix:')
        console.log('1. Check .env.local file')
        console.log('2. Ensure GOOGLE_FORM_ID is set')
        console.log('3. Restart server with npm run dev')
      }
    }
    
  } catch (error) {
    console.error('Test Error:', error)
  }
}

// Load environment variables
require('dotenv').config({ path: require('path').join(__dirname, '../.env.local') })

testGoogleForms()
