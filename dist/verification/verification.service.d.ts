import { Repository } from 'typeorm';
import { Verification } from './verification.entity';
export declare class VerificationService {
    private verificationRepository;
    constructor(verificationRepository: Repository<Verification>);
    createVerification(message: any): Promise<string>;
    getVerification(token: string): Promise<Verification | null>;
    deleteVerification(token: string): Promise<void>;
}
