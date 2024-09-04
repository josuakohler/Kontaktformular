import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { MailService } from "../mail/mail.service";

@Controller("contact")
export class ContactController {
  constructor(private readonly mailService: MailService) {}

  @Post("reply-message")
  async sendReply(@Body() replyMessage) {
    const { firstName, lastName, email, message } = replyMessage;

    await this.mailService.sendResponseEmail(
      email,
      firstName,
      lastName,
      message
    );

    return { status: `Reply sent to ${email}` };
  }
}
