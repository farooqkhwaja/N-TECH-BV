# N-TECH B.V. - Professionele Bedrijfswebsite

Een moderne, professionele website voor N-TECH B.V., een metaalindustrie- en montagebedrijf.

## Design

De website is geïnspireerd op het N-TECH logo met een industriële metaal-look:
- Kleurenpalet: Blauw (#2c5f7d), Teal (#5ba4b8), Lichtblauw accenten
- Industrieel design met metalen effecten
- Professionele uitstraling met moderne CSS

## Tech Stack

- **Backend**: Node.js + Express
- **View Engine**: EJS (Embedded JavaScript Templates)
- **Styling**: Pure CSS (geen frameworks)
- **TypeScript**: Volledig getypeerd
- **Architectuur**: MVC (Model-View-Controller)

## Projectstructuur

```
ntech-website/
├── src/
│   ├── controllers/          # Business logica
│   │   ├── homeController.ts
│   │   ├── aboutController.ts
│   │   ├── productsController.ts
│   │   ├── servicesController.ts
│   │   ├── portfolioController.ts
│   │   ├── entecServicesController.ts
│   │   └── contactController.ts
│   ├── routes/               # Route definities
│   │   ├── homeRoutes.ts
│   │   ├── aboutRoutes.ts
│   │   ├── productsRoutes.ts
│   │   ├── servicesRoutes.ts
│   │   ├── portfolioRoutes.ts
│   │   ├── entecServicesRoutes.ts
│   │   └── contactRoutes.ts
│   ├── views/                # EJS templates
│   │   ├── partials/
│   │   │   ├── header.ejs
│   │   │   ├── navigation.ejs
│   │   │   └── footer.ejs
│   │   └── pages/
│   │       ├── home.ejs
│   │       ├── about.ejs
│   │       ├── products.ejs
│   │       ├── services.ejs
│   │       ├── portfolio.ejs
│   │       ├── entec-services.ejs
│   │       ├── contact.ejs
│   │       └── 404.ejs
│   ├── public/               # Static bestanden
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   └── images/
│   │       └── ntech-logo.jpeg
│   └── server.ts             # Hoofdserver bestand
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

## Installatie & Setup

### Vereisten
- Node.js (v18 of hoger)
- npm of yarn

### Stap 1: Dependencies installeren
```bash
npm install
```

### Stap 2: Development server starten
```bash
npm run dev
```

De website is nu beschikbaar op: `http://localhost:3000`

### Stap 3: Production build
```bash
npm run build
npm start
```

## Pagina's

### 1. **Home** (`/`)
- Hero sectie met slogan
- Introductie over N-TECH B.V.
- Kernactiviteiten preview
- Call-to-action buttons

### 2. **Over Ons** (`/over-ons`)
- Bedrijfsinformatie
- Specialist: Nehru Nuri (±20 jaar ervaring)
- Bedrijfswaarden

### 3. **Producten** (`/producten`)
- Placeholder pagina
- Klaar voor uitbreiding met productcategorieën
- Basis structuur aanwezig

### 4. **Diensten** (`/diensten`)
- Montage & Metaalbewerking
- Aannemen van Industriële Opdrachten
- Uitzendbureau
- Bemiddeling
- Tussenkomst

### 5. **Portfolio** (`/portfolio`)
- Placeholder voor projecten
- Grid layout klaar voor echte projecten
- Type projecten overzicht

### 6. **Entec Services** (`/entec-services`)
- Aparte dienstverleningstak
- Magazijnbeheer
- Certificering
- Industriële Ondersteuning

### 7. **Contact** (`/contact`)
- Contactgegevens: Nehru Nuri
- Telefoon: +31 6 16 00 97 03
- Email: Ntech2017@hotmail.com
- Contactformulier

## Styling & Design

### Kleuren
- **Primary Blue**: #2c5f7d (donkerblauw uit logo)
- **Primary Teal**: #5ba4b8 (lichtblauw uit logo)
- **Accent Light**: #a8d5e2
- **Neutral Light**: #e8f4f8
- **Text Colors**: #1a3a4a, #4a6a7a, #7a9aaa

### Features
- Metalen gradient effecten
- Industriële schaduwen
- Responsive design (mobiel, tablet, desktop)
- Hover effecten op buttons en cards
- Smooth transitions

## Uitbreidingsmogelijkheden

### Backend
- Database integratie (MongoDB, PostgreSQL)
- Authenticatie systeem
- Admin panel
- API endpoints

### Features
- Blog/Nieuws sectie
- Online offerte aanvragen
- Project tracking voor klanten
- Medewerkers portal
- Multi-language support (NL/EN)

### Email Integration
Het contactformulier is voorbereid voor email integratie:
```typescript
// In contactController.ts
// TODO: Implementeer email service (bijvoorbeeld nodemailer)
```

Voorbeeld implementatie:
```bash
npm install nodemailer
```

## Contact Informatie

**N-TECH B.V.**
- **Contactpersoon**: Nehru Nuri
- **Telefoon**: +31 6 16 00 97 03
- **Email**: Ntech2017@hotmail.com
- **Specialisatie**: Metaalindustrie & Montage (±20 jaar ervaring)

## Scripts

- `npm run dev` - Start development server met hot reload
- `npm run build` - Compile TypeScript naar JavaScript
- `npm start` - Start production server

## Environment Variables

Maak een `.env` bestand aan:
```
PORT=3000
NODE_ENV=development
```

## Deployment

### Heroku
```bash
heroku create ntech-website
git push heroku main
```

### Vercel
```bash
vercel --prod
```

### Digital Ocean / VPS
```bash
npm run build
pm2 start dist/server.js --name ntech-website
```

## Licentie

© 2026 N-TECH B.V. - Alle rechten voorbehouden

## Support

Voor vragen of support, neem contact op via:
- Email: Ntech2017@hotmail.com
- Telefoon: +31 6 16 00 97 03

---

**Ontwikkeld met ❤️ voor N-TECH B.V.**
