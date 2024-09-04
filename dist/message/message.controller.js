"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const message_entity_1 = require("./message.entity");
const verification_service_1 = require("../verification/verification.service");
const mail_service_1 = require("../mail/mail.service");
let MessageController = class MessageController {
    constructor(messageService, verificationService, mailService) {
        this.messageService = messageService;
        this.verificationService = verificationService;
        this.mailService = mailService;
    }
    findAll() {
        return this.messageService.findAll();
    }
    findOne(id) {
        return this.messageService.findOne(id);
    }
    async verify(token) {
        const verification = await this.verificationService.getVerification(token);
        if (!verification) {
            return "Verification failed or token expired.";
        }
        await this.messageService.create(verification.message);
        await this.verificationService.deleteVerification(token);
        return "Message has been successfully verified and saved.";
    }
    async create(createMessageDto) {
        const token = await this.verificationService.createVerification(createMessageDto);
        await this.mailService.sendVerificationEmail(createMessageDto.mail, createMessageDto.firstname, createMessageDto.lastname, `http://localhost:8000/messages/verify/${token}`);
        return `A verification email has been sent to ${createMessageDto.mail}. Please verify to complete your message submission.`;
    }
    update(id, updateMessageDto) {
        return this.messageService.update(id, updateMessageDto);
    }
    remove(id) {
        return this.messageService.remove(id);
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("verify/:token"),
    __param(0, (0, common_1.Param)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_entity_1.Message]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "remove", null);
exports.MessageController = MessageController = __decorate([
    (0, common_1.Controller)("messages"),
    __metadata("design:paramtypes", [message_service_1.MessageService,
        verification_service_1.VerificationService,
        mail_service_1.MailService])
], MessageController);
//# sourceMappingURL=message.controller.js.map