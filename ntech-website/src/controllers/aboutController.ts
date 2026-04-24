import { Request, Response } from 'express';

/**
 * About Controller
 * Beheert de "Over Ons" pagina logica
 */
export class AboutController {
  
  /**
   * Render Over Ons pagina
   */
  public static getAbout(req: Request, res: Response): void {
    // Bedrijfsinformatie
    const companyInfo = {
      name: 'N-TECH BV',
      description: 'N-TECH BV is een zelfstandig metaalindustrie- en montagebedrijf. Wij zijn actief in de metaalindustrie en bouwsector. Wij nemen opdrachten aan en leveren vakmanschap op maat.',
      founder: {
        name: 'Nehru Nuri',
        experience: '±20 jaar',
        role: 'Specialist in industriële montage en techniek'
      }
    };

    res.render('pages/about', {
      title: 'Over Ons - N-TECH BV',
      currentPage: 'about',
      companyInfo
    });
  }
}
