require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false, // TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'WashHub email server running' });
});

// Send email route
app.post('/send', async (req, res) => {
  const { from_name, from_email, phone, business, service, message } = req.body;

  if (!from_name || !from_email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const mailOptions = {
    from: `"WashHub Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.TO_EMAIL,
    replyTo: from_email,
    subject: `New Inquiry from ${from_name} — WashHub`,
    html: `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;">
        <div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <div style="background:linear-gradient(135deg,#2563eb,#0891b2);padding:32px;text-align:center;">
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;">🚗 WashHub</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">New Contact Form Submission</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 12px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;font-weight:600;width:35%;">Full Name</td>
                <td style="padding:10px 12px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;">${from_name}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;background:#fff;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;font-weight:600;">Email</td>
                <td style="padding:10px 12px;background:#fff;border-bottom:1px solid #e2e8f0;color:#2563eb;font-size:14px;">${from_email}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;font-weight:600;">Phone</td>
                <td style="padding:10px 12px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;background:#fff;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;font-weight:600;">Business</td>
                <td style="padding:10px 12px;background:#fff;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;">${business || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;font-weight:600;">Service</td>
                <td style="padding:10px 12px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;">${service || 'Not specified'}</td>
              </tr>
            </table>
            <div style="margin-top:20px;padding:16px;background:#f0f9ff;border-left:4px solid #2563eb;border-radius:0 8px 8px 0;">
              <p style="margin:0 0 8px;color:#64748b;font-size:13px;font-weight:600;">MESSAGE</p>
              <p style="margin:0;color:#0f172a;font-size:14px;line-height:1.6;">${message || 'No message provided'}</p>
            </div>
            <div style="margin-top:24px;text-align:center;">
              <a href="mailto:${from_email}" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#2563eb,#0891b2);color:#ffffff;text-decoration:none;border-radius:10px;font-size:14px;font-weight:600;">
                Reply to ${from_name}
              </a>
            </div>
          </div>
          <div style="padding:20px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
            <p style="margin:0;color:#94a3b8;font-size:12px;">Sent from WashHub contact form</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
