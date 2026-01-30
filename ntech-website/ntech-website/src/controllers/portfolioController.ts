import { Request, Response } from 'express';

/**
 * Portfolio Controller
 * Beheert de portfolio pagina logica
 * NOTE: Placeholder - kan later uitgebreid worden met echte projecten
 */
export class PortfolioController {
  
  /**
   * Render Portfolio pagina
   */
  public static getPortfolio(req: Request, res: Response): void {
    // Placeholder projecten - later te vervangen door database
    const projects = [
      {
        id: 1,
        title: 'Industriële Montage Project',
        description: 'Binnenkort meer informatie',
        image: '/images/placeholder-project.jpg'
      },
      {
        id: 2,
        title: 'Metaalconstructie Opdracht',
        description: 'Binnenkort meer informatie',
        image: '/images/placeholder-project.jpg'
      },
      {
        id: 3,
        title: 'Bouwsector Project',
        description: 'Binnenkort meer informatie',
        image: '/images/placeholder-project.jpg'
      }
    ];

    res.render('pages/portfolio', {
      title: 'Portfolio - N-TECH BV',
      currentPage: 'portfolio',
      projects
    });
  }
}
