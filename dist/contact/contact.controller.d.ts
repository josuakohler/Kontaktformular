import { MailService } from "../mail/mail.service";
export declare class ContactController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendReply(replyMessage: any): Promise<{
        status: string;
    }>;
}
