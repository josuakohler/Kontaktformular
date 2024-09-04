import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Verification } from './verification.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class VerificationService {
  constructor(
    @InjectRepository(Verification)
    private verificationRepository: Repository<Verification>,
  ) {}

  async createVerification(message: any): Promise<string> {
    const token = uuidv4();
    const verification = this.verificationRepository.create({
      token,
      message,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
    });
    await this.verificationRepository.save(verification);
    return token;
  }

  async getVerification(token: string): Promise<Verification | null> {
    return this.verificationRepository.findOne({ where: { token } });
  }

  async deleteVerification(token: string): Promise<void> {
    await this.verificationRepository.delete({ token });
  }
}