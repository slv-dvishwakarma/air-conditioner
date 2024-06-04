import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const data = await req.json();
  console.log(data);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "bareillydeals@gmail.com",
      pass: "XXUCgvX~XUa%8ET",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: '"Bareilly Deals" <bareillydeals@gmail.com>', // sender address
    to: "bareillydeals@gmail.com", // list of receivers
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

        <div style="margin:0;margin-top:70px;padding:92px 30px 115px;background:#ffffff;border-radius:30px;">
          <div style="width:100%;max-width:489px;margin:0 auto">
            <h1 style="margin:0;font-size:24px;font-weight:500;color:#1f1f1f">New Inquiry</h1>
            <p style="margin:0;margin-top:17px;font-weight:500;letter-spacing:0.56px">
              We have a new inquiry for AC
            </p>
            <div style="margin:0;margin-top:17px;font-weight:500;letter-spacing:0.56px">
              <div style="padding-bottom:10px"><b>Full Name: </b>${data.fname}</div>
              <div style="padding-bottom:10px"><b>Email: </b><a href="mailto:${data.email}">${data.email}</a></div>
              <div style="padding-bottom:10px"><b>Phone: </b><a href="tel:${data.phone}">${data.phone}</a></div>
              <div style="padding-bottom:10px"><b>Message: </b>${data.textarea}</div>
            </div>
          </div>
        </div>
      </div>
    `, 
  });

  console.log(info);

  return NextResponse.json(info);
};
