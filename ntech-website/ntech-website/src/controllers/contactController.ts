import { Request, Response } from 'express';
import { transporter } from '../utils/mailer';
/**
 * Contact Controller
 * Beheert de contact pagina logica
 */
export class ContactController {
  
  /**
   * Render Contact pagina
   */
  public static getContact(req: Request, res: Response): void {
    // Contactgegevens
    const contactInfo = {
      name: 'Nehru Noori',
      phone: '+31 6 16 00 97 03',
      email: 'Ntech2017@hotmail.com',
      company: 'N-TECH BV'
    };

    res.render('pages/contact', {
      title: 'Contact - N-TECH BV',
      currentPage: 'contact',
      contactInfo
    });
  }

  public static async postContact(req: Request, res: Response): Promise<void> {
    const { name, email, message } = req.body;

    try {
      await transporter.sendMail({
        from: `"N-TECH Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Nieuw contactbericht van ${name}`,
        html: `
          <h2>Nieuw contactformulier</h2>
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Bericht:</strong></p>
          <p>${message}</p>
        `
      });

      res.render('pages/contact', {
        title: 'Contact - N-TECH BV',
        currentPage: 'contact',
        contactInfo: {
          name: 'Nehru Noori',
          phone: '+31 6 16 00 97 03',
          email: 'Ntech2017@hotmail.com',
          company: 'N-TECH BV'
        },
        success: true,
        successMessage: 'Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.'
      });

    } catch (error) {
      console.error('E-mail fout:', error);

      res.render('pages/contact', {
        title: 'Contact - N-TECH BV',
        currentPage: 'contact',
        contactInfo: {
          name: 'Nehru Noori',
          phone: '+31 6 16 00 97 03',
          email: 'Ntech2017@hotmail.com',
          company: 'N-TECH BV'
        },
        error: true,
        errorMessage: 'Er ging iets mis bij het verzenden. Probeer later opnieuw.'
      });
    }
  }
 
}
