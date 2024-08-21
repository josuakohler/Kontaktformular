import { MessageService } from './message.service';
import { Message } from './message.entity';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    create(createMessageDto: Message): Promise<Message>;
    update(id: number, updateMessageDto: Partial<Message>): Promise<Message>;
    remove(id: number): Promise<void>;
}
