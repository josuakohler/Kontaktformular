import { Repository } from 'typeorm';
import { Message } from './message.entity';
export declare class MessageService {
    private messageRepository;
    constructor(messageRepository: Repository<Message>);
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    create(message: Message): Promise<Message>;
    update(id: number, updateMessageDto: Partial<Message>): Promise<Message>;
    remove(id: number): Promise<void>;
}
