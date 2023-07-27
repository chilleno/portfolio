import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const formSubmissionCache: { [key: string]: number } = {};

export async function POST(req: NextRequest) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const secure = process.env.SMTP_SECURE === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  try {
    const { name, email, message } = await req.json();

    const formKey = `${name}-${email}-${message}`;

    if (formSubmissionCache[formKey] && Date.now() - formSubmissionCache[formKey] < 60000) {
      return NextResponse.json({ message: 'Form submission rate limit exceeded' }, { status: 429 });
    }

    const transporter = nodemailer.createTransport({
      host: host,
      port: Number(port),
      secure: secure,
      auth: {
        user: user,
        pass: pass,
      },
    });

    // Compose the email message
    const mailOptions = {
      from: user,
      to: user,
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    formSubmissionCache[formKey] = Date.now();

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
