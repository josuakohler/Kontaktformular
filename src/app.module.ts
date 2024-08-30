import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "./message/message.entity";
import { MessageModule } from "./message/message.module";
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { MailService } from './mail/mail.service';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./kontaktformular_db.sqlite",
      entities: [Message, User], // Add User entity here
      synchronize: true,
    }),
    MessageModule,
    UserModule, // Add UserModule here
  ],
  providers: [MailService],
  controllers: [ContactController],
  // Remove UserController from here as it's now part of UserModule
})
export class AppModule {}