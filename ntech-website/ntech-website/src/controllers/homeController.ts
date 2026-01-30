import { Request, Response } from 'express';

/**
 * Home Controller
 * Beheert de homepage logica
 */
export class HomeController {
  
  /**
   * Render homepage
   */
  public static getHome(req: Request, res: Response): void {
    res.render('pages/home', {
      title: 'N-TECH BV - Uw partner in industriële techniek',
      currentPage: 'home'
    });
  }
}
