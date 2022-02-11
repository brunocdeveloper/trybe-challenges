interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachament?: string[];
}

// Data Transfer Object (DDD)
interface IMessageDTO {
  to: IMailTo,
  message: IMailMessage,
}

class EmailService {
  sendMail(to: IMailTo, message: IMailMessage) {
    console.log(`Email enviado para ${to.name}`);
  }

  // caso a função otherSendEmail seja usada no contoller,
  // o parametro deverá ser nomeado to: { } e message: { }
  otherSendEmail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}`);
  }
}

export default EmailService;