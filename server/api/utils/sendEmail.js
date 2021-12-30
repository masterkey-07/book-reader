const nodemailer = require("nodemailer");

const sendEmail = (message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "victorjorgecarvalhochaves@gmail.com",
      pass: "vjcc0108",
    },
  });

  const mailOptions = {
    from: "panalara.alp@gmail.com",
    to: "victorchaves03@gmail.com",
    subject: "Uso do App dos Livros!",
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) console.log(error);
    else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;
