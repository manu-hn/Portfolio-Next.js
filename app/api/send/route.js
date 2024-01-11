// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import { Resend } from 'resend';
// import { NextResponse } from "next/server";


// const resendApiKey = process.env.RESEND_API_KEY
// const resend = new Resend(resendApiKey);
// const fromMyEmail = process.env.FROM_EMAIL

// export async function POST(request, response) {
//   const {body} = await request.json();
//   const { email, subject, message } =body;
//   try {
//     const data = await resend.emails.send({
//       from: fromMyEmail,
//       to: ['backdroid.0501@gmail.com', email],
//       subject: subject,
//       react: <>
//         <h1>{subject}</h1>
//         <p>Thank you for contacting me...!</p>
//         <p>New Message Submitted</p>
//         <p>{message}</p>
//       </>,
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
