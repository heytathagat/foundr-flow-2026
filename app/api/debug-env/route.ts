import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    EMAIL_USER: process.env.EMAIL_USER || 'NOT SET',
    EMAIL_PASS: process.env.EMAIL_PASS ? '***SET***' : 'NOT SET',
    NODE_ENV: process.env.NODE_ENV,
    ALL_ENV: Object.keys(process.env).filter(key => key.startsWith('EMAIL'))
  })
}
