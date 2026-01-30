import { Request, Response } from 'express';

/**
 * Entec Services Controller
 * Beheert de Entec Services portal/sectie
 * NOTE: Aparte dienstverleningstak - kan later uitgebreid worden
 */
export class EntecServicesController {
  
  /**
   * Render Entec Services pagina
   */
  public static getEntecServices(req: Request, res: Response): void {
    // Entec Services informatie
    const entecServices = [
      {
        id: 1,
        title: 'Magazijnbeheer',
        description: 'Professioneel beheer van uw magazijn en voorraad.',
        icon: 'package'
      },
      {
        id: 2,
        title: 'Certificering',
        description: 'Ondersteuning bij certificering en kwaliteitsnormen.',
        icon: 'certificate'
      },
      {
        id: 3,
        title: 'Industriële Ondersteuning',
        description: 'Complete ondersteuning voor industriële processen.',
        icon: 'cog'
      }
    ];

    res.render('pages/entec-services', {
      title: 'Entec Services - N-TECH BV',
      currentPage: 'entec-services',
      entecServices
    });
  }
}
