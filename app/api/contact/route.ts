import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, business, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'mail.privateemail.com',
      port: 587,
      secure: false, // TLS on port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"WashHub Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New enquiry from ${name}${business ? ` — ${business}` : ''}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <h2 style="color: #0f172a; font-size: 22px; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; width: 130px; vertical-align: top; font-size: 14px;">Name</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; color: #2563eb; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top; font-size: 14px;">Phone</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${phone}</td>
            </tr>` : ''}
            ${business ? `
            <tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top; font-size: 14px;">Business</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${business}</td>
            </tr>` : ''}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top; font-size: 14px;">Service</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${service}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top; font-size: 14px;">Message</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 14px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px;">
            Sent via WashHub contact form
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
