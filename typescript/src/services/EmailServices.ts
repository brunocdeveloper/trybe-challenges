interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachament?: string[];
}

class EmailService {
  sendMail(to: IMailTo, message: IMailMessage) {
    console.log(`Email enviado para ${to.name}`);
  }
}

export default EmailService;