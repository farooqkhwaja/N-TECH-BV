import { Request, Response } from 'express';

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
      name: 'Nehru Nuri',
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

  /**
   * Verwerk contact formulier
   * NOTE: Placeholder - implementeer later met email service
   */
  public static postContact(req: Request, res: Response): void {
    const { name, email, message } = req.body;
    
    // TODO: Implementeer email service (bijvoorbeeld nodemailer)
    console.log('Contact formulier ontvangen:', { name, email, message });

    res.render('pages/contact', {
      title: 'Contact - N-TECH BV',
      currentPage: 'contact',
      contactInfo: {
        name: 'Nehru Nuri',
        phone: '+31 6 16 00 97 03',
        email: 'Ntech2017@hotmail.com',
        company: 'N-TECH BV'
      },
      success: true,
      successMessage: 'Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.'
    });
  }
}
