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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let MailService = class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "josuaspyrox@gmail.com",
                pass: "gpkh juvl lvdm nlvp",
            },
        });
    }
    async sendVerificationEmail(to, firstName, lastName, verificationLink) {
        const mailOptions = {
            from: "josuaspyrox@gmail.com",
            to,
            subject: "Verify your email address",
            text: `Hello ${firstName} ${lastName}, please verify your email by clicking on the following link: ${verificationLink}`,
            html: `<p>Hello ${firstName} ${lastName},</p><p>Please verify your email by clicking on the following link:</p><a href="${verificationLink}">Verify Email</a>`,
        };
        return await this.transporter.sendMail(mailOptions);
    }
    async sendResponseEmail(to, firstName, lastName, responseMessage) {
        const mailOptions = {
            from: '"Support" <support@example.com>',
            to,
            subject: "Response to your inquiry",
            text: `Hello ${firstName} ${lastName},\n\n${responseMessage}`,
            html: ` <p>Hello ${firstName} ${lastName},</p>
  <p>We appreciate your message.</p>
  <table>
    <tr>
      <td>${responseMessage}</td>
    </tr>
  </table>
  <p>Best regards,<br/>Your Support Team</p>
`,
        };
        return await this.transporter.sendMail(mailOptions);
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MailService);
//# sourceMappingURL=mail.service.js.map