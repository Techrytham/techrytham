import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Subject, Message)." },
        { status: 400 }
      );
    }

    // Email HTML Template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Submission</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f6f6f9;
            color: #333333;
            margin: 0;
            padding: 0;
          }
          .wrapper {
            background-color: #f6f6f9;
            width: 100%;
            padding: 40px 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            border: 1px solid #ECECFF;
          }
          .header {
            background: linear-gradient(135deg, #8E8EDC 0%, #0000FF 100%);
            padding: 35px 30px;
            text-align: center;
            color: #ffffff;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0.5px;
          }
          .header p {
            margin: 10px 0 0 0;
            font-size: 14px;
            opacity: 0.9;
          }
          .content {
            padding: 40px 30px;
          }
          .field-group {
            margin-bottom: 25px;
            border-bottom: 1px solid #f0f0f8;
            padding-bottom: 20px;
          }
          .field-group:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
          }
          .field-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #8E8EDC;
            font-weight: 700;
            margin-bottom: 8px;
          }
          .field-value {
            font-size: 15px;
            color: #1A1A24;
            line-height: 1.6;
          }
          .message-box {
            background-color: #F8F8FF;
            border-left: 4px solid #0000FF;
            padding: 15px 20px;
            border-radius: 4px 12px 12px 4px;
            font-style: italic;
            color: #4C4C57;
          }
          .footer {
            background-color: #FBFBFF;
            padding: 25px 30px;
            text-align: center;
            font-size: 12px;
            color: #8E8EDC;
            border-top: 1px solid #ECECFF;
          }
          .footer a {
            color: #0000FF;
            text-decoration: none;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <h1>New Contact Message</h1>
              <p>Received from Techrytham Website Form</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="field-label">Sender Name</div>
                <div class="field-value" style="font-weight: 600;">${name}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #0000FF; text-decoration: none;">${email}</a>
                </div>
              </div>
              <div class="field-group">
                <div class="field-label">Phone Number</div>
                <div class="field-value">${phone || "Not Provided"}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Subject</div>
                <div class="field-value" style="font-weight: 600;">${subject}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Message</div>
                <div class="field-value message-box">${message.replace(/\n/g, "<br/>")}</div>
              </div>
            </div>
            <div class="footer">
              This email was sent securely via <strong>Techrytham Contact Portal</strong>.<br/>
              &copy; 2026 <a href="https://techrytham.com">Techrytham</a>. All rights reserved.
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "techrytham.com@gmail.com";

    if (!smtpUser || !smtpPass) {
      // Local development fallback: Log details to console and return success
      console.warn("⚠️ SMTP credentials not set. Logging email content to console:");
      console.log("------------------ EMAIL CONTENT START ------------------");
      console.log(`To: ${receiverEmail}`);
      console.log(`Subject: [Contact Form] ${subject}`);
      console.log(`From: ${name} <${email}> (${phone || "No phone"})`);
      console.log(`Message:\n${message}`);
      console.log("------------------- EMAIL CONTENT END -------------------");

      return NextResponse.json({
        success: true,
        info: "Message received! (SMTP credentials not configured, printed to console)",
      });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Send Mail
    await transporter.sendMail({
      from: `"${name} (Techrytham Contact)" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `[Techrytham Contact] ${subject}`,
      text: `Sender Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not Provided"}\nSubject: ${subject}\nMessage:\n${message}`,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to send message." },
      { status: 500 }
    );
  }
}
