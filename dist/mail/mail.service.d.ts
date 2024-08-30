export declare class MailService {
    private transporter;
    constructor();
    sendVerificationEmail(to: string, firstName: string, lastName: string, verificationLink: string): Promise<any>;
    sendResponseEmail(to: string, firstName: string, lastName: string, responseMessage: string): Promise<any>;
}
