import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "./message/message.entity";
import { MessageModule } from "./message/message.module";
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { MailService } from './mail/mail.service';
import { VerificationService } from './verification/verification.service';
import { Verification } from "./verification/verification.entity";
import { MessageService } from "./message/message.service"; // Import MessageService
import { MessageController } from "./message/message.controller";
import { VerificationModule } from './verification/verification.module'; // Importiere das Modul
import { ContactController } from "./contact/contact.controller";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./kontaktformular_db.sqlite",
      entities: [Message, User, Verification],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Verification, Message]), // Add Message here
    MessageModule,
    UserModule,
    VerificationModule
  ],
  providers: [MailService, VerificationService, MessageService], // Add MessageService here
  controllers: [MessageController, ContactController],
})
export class AppModule {}