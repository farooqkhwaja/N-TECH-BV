import express, { Express, Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';

// Routes importeren
import homeRoutes from './routes/homeRoutes';
import aboutRoutes from './routes/aboutRoutes';
import productsRoutes from './routes/productsRoutes';
import servicesRoutes from './routes/servicesRoutes';
import portfolioRoutes from './routes/portfolioRoutes';
import entecServicesRoutes from './routes/entecServicesRoutes';
import contactRoutes from './routes/contactRoutes';

// Environment variables laden
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

// View engine setup - EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files - CSS, JS, images
app.use(express.static(path.join(__dirname, 'public')));

// Routes registreren
app.use('/', homeRoutes);
app.use('/over-ons', aboutRoutes);
app.use('/producten', productsRoutes);
app.use('/diensten', servicesRoutes);
app.use('/portfolio', portfolioRoutes);
app.use('/entec-services', entecServicesRoutes);
app.use('/contact', contactRoutes);

// 404 Error handler
app.use((req: Request, res: Response) => {
  res.status(404).render('pages/404', {
    title: '404 - Pagina niet gevonden',
    currentPage: '404'
  });
});

// Server starten
app.listen(PORT, () => {
  console.log(`✅ N-TECH BV server draait op http://localhost:${PORT}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});
