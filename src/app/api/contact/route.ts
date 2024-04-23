import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Define the form fields with a TypeScript interface
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}


export async function POST(request: NextRequest, res: NextResponse){
  const { name: clientName, email: clientEmail, phone: clientPhone, message: clientMessage } = await request.json();

  const nodeMailer = process.env.NODEMAILER_EMAIL;
  const myPassword = process.env.NODEMAILER_PW;
  const HMEmail = process.env.HIGH_MAINTENANCE_EMAIL;

  console.log("dealing with request")

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: nodeMailer,
      pass: myPassword,
    },
  });

  const mailOptions = {
    from: nodeMailer,
    to: HMEmail,
    replyTo: clientEmail,
    subject: `Website activity from ${clientEmail}`,
    html: `
            <p>Name: ${clientName} </p>
            <p>Email: ${clientEmail} </p>
            <p>Phone: ${clientPhone} </p>
            <p>Message: ${clientMessage} </p>
            `,
  };


  try {
    const mail = await  transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success: email was sent" })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" })
  }
}
