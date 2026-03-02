const nodemailer = require('nodemailer')

const testZohoEmail = async () => {
  console.log('🔧 Testing Zoho Email Configuration...\n')
  
  // Test different Zoho configurations
  const configs = [
    {
      name: 'Zoho SMTP - Port 587 (STARTTLS)',
      config: {
        host: 'smtp.zoho.in',
        port: 587,
        secure: false,
        auth: {
          user: 'hello@foundrflow.in',
          pass: 'uCQzKZkDDF4S'
        }
      }
    },
    {
      name: 'Zoho SMTP - Port 465 (SSL)',
      config: {
        host: 'smtp.zoho.in',
        port: 465,
        secure: true,
        auth: {
          user: 'hello@foundrflow.in',
          pass: 'uCQzKZkDDF4S'
        }
      }
    }
  ]
  
  for (const { name, config } of configs) {
    console.log(`\n🔄 Testing: ${name}`)
    
    try {
      const transporter = nodemailer.createTransport(config)
      
      // Test connection
      await transporter.verify()
      console.log(`✅ SUCCESS: ${name} - Connection verified`)
      
      // Test sending email
      const testEmail = await transporter.sendMail({
        from: 'hello@foundrflow.in',
        to: 'hello@foundrflow.in',
        subject: `📧 Test - ${name}`,
        html: `
          <h2>Zoho Email Test Successful!</h2>
          <p>Configuration: ${name}</p>
          <p>If you receive this email, the Zoho configuration is working!</p>
          <hr>
          <p>Time: ${new Date().toLocaleString()}</p>
        `,
      })
      
      console.log(`📨 Email sent successfully with: ${name}`)
      console.log(`📬 Check inbox: hello@foundrflow.in`)
      
      // If successful, we can stop here
      return
      
    } catch (error) {
      console.log(`❌ FAILED: ${name}`)
      console.log(`   Error: ${error.message}`)
      
      if (error.code === 'EAUTH') {
        console.log(`   Possible issues:`)
        console.log(`   - Check email/password credentials`)
        console.log(`   - Verify Zoho account allows SMTP access`)
        console.log(`   - Check if 2-factor authentication affects SMTP`)
      }
    }
  }
  
  console.log('\n🔍 If all tests failed:')
  console.log('1. Verify Zoho account: hello@foundrflow.in')
  console.log('2. Check password: uCQzKZkDDF4S')
  console.log('3. Ensure Zoho allows SMTP access')
  console.log('4. Check Zoho account settings for third-party apps')
}

testZohoEmail()
