// message.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { Message } from './message.entity';
import { VerificationModule } from '../verification/verification.module'; // Importiere das VerificationModule
import { MailService } from '../mail/mail.service'; // Falls MailService im gleichen Modul definiert ist, kannst du es direkt verwenden

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
    VerificationModule, // Füge das importierte Modul hier hinzu
  ],
  controllers: [MessageController],
  providers: [MessageService, MailService], // Stelle sicher, dass alle Services hier aufgelistet sind
})
export class MessageModule {}
