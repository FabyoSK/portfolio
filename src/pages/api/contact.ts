const nodemailer = require("nodemailer");

export default function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,     
    host: "smtp.gmail.com",
       auth: {
            user: process.env.DEMO_EMAIL,
            pass: process.env.PASSWORD,
         },
    secure: true,
  });
  
  const mailData = {
      from: process.env.DEMO_EMAIL,
      to: process.env.PERSONAL_EMAIL,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, (err, info) => {
      if(err) {
        console.log(err)
      }
      else {
        console.log(info);
      }
    })
    res.send('success')
}