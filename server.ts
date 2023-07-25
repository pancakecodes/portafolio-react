import express, { Request, Response } from 'express';
import { Router } from 'express';
import cors from 'cors';
import nodemailer, { Transporter } from 'nodemailer';

interface ContactMail {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const app = express();
const router = Router();

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(5000, () => console.log('Server Running'));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "**********@gmail.com", 
    pass: "" 
  }
});

contactEmail.verify((error: Error | null) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req: Request, res: Response) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name: string = firstName + ' ' + lastName;
  const mail: ContactMail = {
    from: name,
    to: '**********@gmail.com', // Coloca aquí la dirección de correo electrónico de destino
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`
  };
  contactEmail.sendMail(mail, (error: Error | null) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
