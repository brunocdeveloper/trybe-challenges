"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail(to, message) {
        console.log(`Email enviado para ${to.name}`);
    }
    // caso a função otherSendEmail seja usada no contoller,
    // o parametro deverá ser nomeado to: { } e message: { }
    otherSendEmail({ to, message }) {
        console.log(`Email enviado para ${to.name}`);
    }
}
exports.default = EmailService;
