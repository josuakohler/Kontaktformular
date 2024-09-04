// verification.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VerificationService } from './verification.service';
import { Verification } from './verification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Verification])],
  providers: [VerificationService],
  exports: [VerificationService], // Exportiere den Service, damit andere Module ihn verwenden können
})
export class VerificationModule {}
