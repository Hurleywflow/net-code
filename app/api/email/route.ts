/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getErrorMessage } from '@/lib/type-helper'
import ContactForm from '@/react-email-starter/emails/booking-form'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request): Promise<NextResponse> {
  // destructuring the request body into variables
  const { username, email, phone, price, note } = await request.json()

  try {
    await resend.emails.send({
      from: 'NetCode <onboarding@resend.dev>',
      to: ['hurleywflow@gmail.com'],
      subject: 'New message from NetCode booking!',
      reply_to: email,
      // send data to react email (booking-form) component to render
      react: ContactForm({
        username,
        email,
        phone,
        price,
        note,
      }),
    })

    return NextResponse.json(
      {
        status: 'Ok',
      },
      {
        status: 200,
      },
    )
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`)
    }
    return NextResponse.json(
      {
        error: getErrorMessage(e),
      },
      {
        status: 500,
      },
    )
  }
}
