import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "./message/message.entity";
import { MessageModule } from "./message/message.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./kontaktformular_db.sqlite",
      entities: [Message],
      synchronize: true,
    }),
    MessageModule,
  ],
})
export class AppModule {}
