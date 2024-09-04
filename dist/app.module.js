"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_entity_1 = require("./message/message.entity");
const message_module_1 = require("./message/message.module");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/user.entity");
const mail_service_1 = require("./mail/mail.service");
const verification_service_1 = require("./verification/verification.service");
const verification_entity_1 = require("./verification/verification.entity");
const message_service_1 = require("./message/message.service");
const message_controller_1 = require("./message/message.controller");
const verification_module_1 = require("./verification/verification.module");
const contact_controller_1 = require("./contact/contact.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "sqlite",
                database: "./kontaktformular_db.sqlite",
                entities: [message_entity_1.Message, user_entity_1.User, verification_entity_1.Verification],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([verification_entity_1.Verification, message_entity_1.Message]),
            message_module_1.MessageModule,
            user_module_1.UserModule,
            verification_module_1.VerificationModule
        ],
        providers: [mail_service_1.MailService, verification_service_1.VerificationService, message_service_1.MessageService],
        controllers: [message_controller_1.MessageController, contact_controller_1.ContactController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map