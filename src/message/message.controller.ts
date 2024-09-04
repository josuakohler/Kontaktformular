import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { MessageService } from "./message.service";
import { Message } from "./message.entity";
import { VerificationService } from "src/verification/verification.service";
import { MailService } from "src/mail/mail.service";

@Controller("messages")
export class MessageController {
  constructor(
    private readonly messageService: MessageService,
    private readonly verificationService: VerificationService,
    private readonly mailService: MailService
  ) {}

  @Get()
  findAll(): Promise<Message[]> {
    return this.messageService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<Message> {
    return this.messageService.findOne(id);
  }
  @Get("verify/:token")
  async verify(@Param("token") token: string): Promise<string> {
    // Überprüfe die Verifizierung
    const verification = await this.verificationService.getVerification(token);

    if (!verification) {
      return "Verification failed or token expired.";
    }

    // Speichere die Nachricht in der Datenbank
    await this.messageService.create(verification.message);

    // Lösche die Verifizierung
    await this.verificationService.deleteVerification(token);

    return "Message has been successfully verified and saved.";
  }

  @Post()
  async create(@Body() createMessageDto: Message): Promise<string> {
    // Erstelle einen Verifizierungseintrag
    const token =
      await this.verificationService.createVerification(createMessageDto);

    // Sende die Verifizierungs-E-Mail
    await this.mailService.sendVerificationEmail(
      createMessageDto.mail,
      createMessageDto.firstname,
      createMessageDto.lastname,
      `http://localhost:8000/messages/verify/${token}`
    );

    return `A verification email has been sent to ${createMessageDto.mail}. Please verify to complete your message submission.`;
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() updateMessageDto: Partial<Message>
  ): Promise<Message> {
    return this.messageService.update(id, updateMessageDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.messageService.remove(id);
  }
}
