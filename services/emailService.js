//emailService.js
const nodemailer = require('nodemailer');

async function sendNewsletter(email, subject, content) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // true para 465, false para otros puertos
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // Opciones del correo
  const mailOptions = {
    from: process.env.EMAIL, // Reemplaza con tu dirección de correo electrónico
    to: email,
    subject: subject,
    html: content,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Correo electrónico enviado a ${email}`);
  } catch (error) {
    console.error(`Error al enviar correo electrónico a ${email}:`, error);
    throw new Error(`Error al enviar correo electrónico a ${email}`);
  }
}

module.exports = { sendNewsletter };
