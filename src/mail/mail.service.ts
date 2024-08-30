import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // e.g., smtp.gmail.com for Gmail
      port: 587, // 465 for secure connection (SSL/TLS)
      secure: false, // true for 465, false for other ports
      auth: {
        user: "josuaspyrox@gmail.com", // your email address
        pass: "gpkh juvl lvdm nlvp", // your email password
      },
    });
  }

  async sendVerificationEmail(
    to: string,
    firstName: string,
    lastName: string,
    verificationLink: string
  ) {
    const mailOptions = {
      from: "josuaspyrox@gmail.com", // sender address
      to, // recipient email address
      subject: "Verify your email address",
      text: `Hello ${firstName} ${lastName}, please verify your email by clicking on the following link: ${verificationLink}`,
      html: `<p>Hello ${firstName} ${lastName},</p><p>Please verify your email by clicking on the following link:</p><a href="${verificationLink}">Verify Email</a>`,
    };

    return await this.transporter.sendMail(mailOptions);
  }

  async sendResponseEmail(
    to: string,
    firstName: string,
    lastName: string,
    responseMessage: string
  ) {
    const mailOptions = {
      from: '"Support" <support@example.com>', // sender address
      to, // recipient email address
      subject: "Response to your inquiry",
      text: `Hello ${firstName} ${lastName},\n\n${responseMessage}`,
      html: ` <p>Hello ${firstName} ${lastName},</p>
  <p>We appreciate your message.</p>
  <table>
    <tr>
      <td>${responseMessage}</td>
    </tr>
  </table>
  <p>Best regards,<br/>Your Support Team</p>
`,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
