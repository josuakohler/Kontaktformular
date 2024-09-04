import { MessageService } from "./message.service";
import { Message } from "./message.entity";
import { VerificationService } from "src/verification/verification.service";
import { MailService } from "src/mail/mail.service";
export declare class MessageController {
    private readonly messageService;
    private readonly verificationService;
    private readonly mailService;
    constructor(messageService: MessageService, verificationService: VerificationService, mailService: MailService);
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    verify(token: string): Promise<string>;
    create(createMessageDto: Message): Promise<string>;
    update(id: number, updateMessageDto: Partial<Message>): Promise<Message>;
    remove(id: number): Promise<void>;
}
