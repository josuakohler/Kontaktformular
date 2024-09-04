import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../message/message.entity';

@Entity('verifications')
export class Verification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column('json')
  message: Message;

  @Column()
  expiresAt: Date;
}
