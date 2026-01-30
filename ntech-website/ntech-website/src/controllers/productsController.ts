import { Request, Response } from 'express';

/**
 * Products Controller
 * Beheert de producten pagina logica
 * NOTE: Placeholder - kan later uitgebreid worden met database en product categorieën
 */
export class ProductsController {
  
  /**
   * Render Producten pagina
   */
  public static getProducts(req: Request, res: Response): void {
    res.render('pages/products', {
      title: 'Producten - N-TECH BV',
      currentPage: 'products'
    });
  }
}
