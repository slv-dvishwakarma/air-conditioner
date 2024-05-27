import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const data = await req.json();
  console.log(data);
  const transporter = await nodemailer.createTransport({
    // service: "gmail",
    // auth: {
    //   user: "sonuv.2201@gmail.com",
    //   pass: "Khushi@2517",
    // },
    pool: true,
    host: "mail.bareillydeals.com",
    port: 587,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "info@bareillydeals.com",
      pass: "(vX50L+k&Ff-",
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
    // host: "smtp.ethereal.email",
    // port: 587,
    // auth: {
    //   user: "carmel47@ethereal.email",
    //   pass: "WpgS2KkFUHK5mtdcUZ",
    // },
  });

  const info = await transporter.sendMail({
    from: "<sonuv.2201@gmail.com>", // sender address
    to: "info@bareillydeals.com", // list of receivers
    subject: "New Inquiry", // Subject line
    html: `
    
    <div style="max-width:680px;margin:0 auto;padding:45px 30px 60px;background:#f4f7ff;background-image:url(https://ci3.googleusercontent.com/meips/ADKq_Nbb-zeLPmU0tNDq_LjiyPV6l6d7bsUL4WgAutzIzC8d4JzeR-GI34SFoGLTKDd9tFkFlWB2P_CKUVgH3uNz-bhDpiOJB-X2ff2ageymomNwR0sHcO4RMcShk6YBML3WGuMzWrxN5qo=s0-d-e1-ft#https://res.cloudinary.com/davni9ef9/image/upload/v1704368789/IMG_4291_azqi2n.jpg);background-repeat:no-repeat;background-size:800px 452px;background-position:top center;font-size:14px;color:#434343">
      <header>
        <table style="width:100%">
          <tbody>
            <tr style="height:0">
              <td>
                <img alt="" height="80px">
              </td>
              <td style="text-align:right"></td>
            </tr>
          </tbody>
        </table>
      </header>

      <u></u>
        <div style="margin:0;margin-top:70px;padding:92px 30px 115px;background:#ffffff;border-radius:30px;">
          <div style="width:100%;max-width:489px;margin:0 auto">
            <h1 style="margin:0;font-size:24px;font-weight:500;color:#1f1f1f">New Inquiry</h1>
            <p style="margin:0;margin-top:17px;font-weight:500;letter-spacing:0.56px">
              We have new Inquiry for ac
            </p>
            <div style="margin:0;margin-top:17px;font-weight:500;letter-spacing:0.56px">
                <div style="padding-bottom:10px"><b>Full Name: </b>${data.fname}</div>
                <div style="padding-bottom:10px"><b>Email: </b><a href="mailto:${data.email}">${data.email}</a></div>
                <div style="padding-bottom:10px"><b>Phone: </b><a href="tel:${data.phone}">${data.phone}</a></div>
                <div style="padding-bottom:10px"><b>Message: </b>${data.textarea}<div>
            </div>
          </div>
        </div>
      <u></u>
        </div>
    `, // html body
  });

  console.log(info);

  return NextResponse.json(info);
};
