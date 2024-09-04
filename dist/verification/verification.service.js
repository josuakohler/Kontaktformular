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
exports.VerificationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const verification_entity_1 = require("./verification.entity");
const uuid_1 = require("uuid");
let VerificationService = class VerificationService {
    constructor(verificationRepository) {
        this.verificationRepository = verificationRepository;
    }
    async createVerification(message) {
        const token = (0, uuid_1.v4)();
        const verification = this.verificationRepository.create({
            token,
            message,
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
        });
        await this.verificationRepository.save(verification);
        return token;
    }
    async getVerification(token) {
        return this.verificationRepository.findOne({ where: { token } });
    }
    async deleteVerification(token) {
        await this.verificationRepository.delete({ token });
    }
};
exports.VerificationService = VerificationService;
exports.VerificationService = VerificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(verification_entity_1.Verification)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VerificationService);
//# sourceMappingURL=verification.service.js.map