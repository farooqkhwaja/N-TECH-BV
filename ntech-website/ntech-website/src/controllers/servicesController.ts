import { Request, Response } from 'express';

/**
 * Services Controller
 * Beheert de diensten pagina logica
 */
export class ServicesController {
  
  /**
   * Render Diensten pagina
   */
  public static getServices(req: Request, res: Response): void {
    // Diensten lijst - makkelijk uitbreidbaar
    const services = [
      {
        id: 1,
        title: 'Montage & Metaalbewerking',
        description: 'Professionele montage en metaalbewerking voor industriële toepassingen.',
        icon: 'wrench'
      },
      {
        id: 2,
        title: 'Aannemen van Industriële Opdrachten',
        description: 'Wij nemen complete industriële projecten aan en voeren deze vakkundig uit.',
        icon: 'grid'
      },
      {
        id: 3,
        title: 'Uitzendbureau',
        description: 'Bemiddeling van gekwalificeerd personeel voor uw projecten.',
        icon: 'users'
      },
      {
        id: 4,
        title: 'Bemiddeling',
        description: 'Professionele bemiddeling voor industriële opdrachten en personeel.',
        icon: 'handshake'
      },
      {
        id: 5,
        title: 'Tussenkomst',
        description: 'Ondersteuning en advies bij complexe industriële projecten.',
        icon: 'briefcase'
      }
    ];

    res.render('pages/services', {
      title: 'Diensten - N-TECH BV',
      currentPage: 'services',
      services
    });
  }
}
