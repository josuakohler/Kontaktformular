import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Message } from "./message.entity";

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>
  ) {}
  findAll(): Promise<Message[]> {
    return this.messageRepository.find();
  }

  findOne(id: number): Promise<Message> {
    return this.messageRepository.findOneBy({ id });
  }

  create(message: Message): Promise<Message> {
    return this.messageRepository.save(message);
  }

  async update(
    id: number,
    updateMessageDto: Partial<Message>
  ): Promise<Message> {
    await this.messageRepository.update(id, updateMessageDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.messageRepository.delete(id);
  }
}
