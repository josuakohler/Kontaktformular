import { MailService } from "../mail/mail.service";
export declare class ContactController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendMessage(contactForm: any): Promise<{
        status: string;
    }>;
    sendReply(replyMessage: any): Promise<{
        status: string;
    }>;
}
