import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './message.entity';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  findAll(): Promise<Message[]> {
    return this.messageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Message> {
    return this.messageService.findOne(id);
  }

  @Post()
  create(@Body() createMessageDto: Message): Promise<Message> {
    return this.messageService.create(createMessageDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateMessageDto: Partial<Message>): Promise<Message> {
    return this.messageService.update(id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.messageService.remove(id);
  }
}
