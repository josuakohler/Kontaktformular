import { Controller, Post, Body } from "@nestjs/common";
import { MailService } from "../mail/mail.service";

@Controller("contact")
export class ContactController {
  constructor(private readonly mailService: MailService) {}

  @Post("send-message")
  async sendMessage(@Body() contactForm) {
    const { firstName, lastName, email, message } = contactForm;

    // Generate a verification link (for demonstration)
    const verificationLink = `https://yourapp.com/verify?email=${email}`;

    // Send verification email
    await this.mailService.sendVerificationEmail(
      email,
      firstName,
      lastName,
      verificationLink
    );

    // Optionally, send a response email as a confirmation

    //if statement braucht es z.B is verified=true dann diese methode benutzen
    const responseMessage =
      "Thanks for verify your Mail, we will contact you soon.";
    await this.mailService.sendResponseEmail(
      email,
      firstName,
      lastName,
      responseMessage
    );

    return { status: "Message sent and verification email dispatched" };
  }

  @Post("reply-message")
  async sendReply(@Body() replyMessage) {
    const { firstName, lastName, email, message } = replyMessage;

    await this.mailService.sendResponseEmail(
      email,
      firstName,
      lastName,
      message
    );

    return { status: `Reply sent to ${email}`}
  }
}
