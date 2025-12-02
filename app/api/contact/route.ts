import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log the contact form submission
    console.log('Contact form submission:', {
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone,
      projectType: body.projectType,
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Here you would typically:
    // 1. Send an email notification
    // 2. Save to a database
    // 3. Integrate with a CRM
    //
    // For now, we'll just return success

    return NextResponse.json(
      { message: 'Tack för ditt meddelande! Vi återkommer inom 24 timmar.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Något gick fel. Vänligen försök igen.' },
      { status: 500 }
    )
  }
}
