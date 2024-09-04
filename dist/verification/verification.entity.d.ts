import { Message } from '../message/message.entity';
export declare class Verification {
    id: number;
    token: string;
    message: Message;
    expiresAt: Date;
}
