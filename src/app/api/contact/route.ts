import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api

// export async function POST(req,res){
//   const data  =await req.json()
//
//   const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
//   const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
//   const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
//   const myPassword = process.env.NEXT_PUBLIC_PERSONAL_PASSWORD;
//
//   console.log(myEmail, myPassword);
//
//
//
//   console.log("dealing with request")
  // const formData = await request.formData()
  // console.log(formData)
  // const name = formData.get('name')
  // const email = formData.get('email')
  // const message = formData.get('message')


//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: myEmail,
//       pass: myPassword,
//     },
//   });
//
//   const mailOptions = {
//     from: myEmail,
//     to: '0alid1@gmail.com',
//     subject: 'Contact Form Submission',
//     text: `Message from: `,
//   };
//
//   console.log(data)
//
//
//   try {
//
//     const mail = await  transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: "Success: email was sent" })
//
//   } catch (error) {
//     console.log(error)
//     // NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
//   }
//
//   return NextResponse.json(data)
// }
//
// export async function POST(request: NextRequest) {
//
//   const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
//   const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
//   const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
//   const myPassword = process.env.NEXT_PUBLIC_PERSONAL_PASSWORD;
//
//
//   console.log("dealing with request")
//   const formData = await request.formData()
//   console.log(formData)
//   // const name = formData.get('name')
//   // const email = formData.get('email')
//   // const message = formData.get('message')
//
//
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: myEmail,
//       pass: myPassword,
//     },
//   });
//
//   const mailOptions = {
//     from: myEmail,
//     to: '0alid1@gmail.com',
//     subject: 'Contact Form Submission',
//     text: `Message from: `,
//   };
//
//   // create transporter object
//   // const transporter = nodemailer.createTransport({
//   //   host: "smtp-mail.outlook.com",
//   //   port: 587,
//   //   tls: {
//   //     ciphers: "SSLv3",
//   //     rejectUnauthorized: false,
//   //   },
//   //
//   //   auth: {
//   //     user: username,
//   //     pass: password
//   //   }
//   // });
//
//   try {
//
//
//     //
//     // const mail = await transporter.sendMail({
//     //   from: username,
//     //   to: myEmail,
//     //   replyTo: email,
//     //   subject: `Website activity from ${email}`,
//     //   html: `
//     //         <p>Name: ${name} </p>
//     //         <p>Email: ${email} </p>
//     //         <p>Message: ${message} </p>
//     //         `,
//     // })
//     //
//     // const mail = await  transporter.sendMail(mailOptions);
//     // return NextResponse.json({ message: "Success: email was sent" })
//
//   } catch (error) {
//     console.log(error)
//     // NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
//   }
// }
