# INSTALLATIE INSTRUCTIES - N-TECH WEBSITE

## Snelle Start (3 stappen)

### 1️⃣ Dependencies Installeren
```bash
cd ntech-website
npm install
```

Dit installeert:
- express (^4.18.2)
- ejs (^3.1.9)
- dotenv (^16.3.1)
- typescript (^5.3.3)
- @types/express (^4.17.21)
- @types/node (^20.10.5)
- ts-node (^10.9.2)
- nodemon (^3.0.2)

### 2️⃣ Development Server Starten
```bash
npm run dev
```

Website draait nu op: **http://localhost:3000**

### 3️⃣ Browser Openen
Open je browser en ga naar:
```
http://localhost:3000
```

## 📋 Volledige Installatie Stappen

### Stap 1: Node.js Controleren
Controleer of Node.js geïnstalleerd is:
```bash
node --version
# Vereist: v18.0.0 of hoger
```

Niet geïnstalleerd? Download van: https://nodejs.org/

### Stap 2: Project Openen
```bash
cd ntech-website
```

### Stap 3: Dependencies Installeren
```bash
npm install
```

### Stap 4: Environment Variables (optioneel)
Het `.env` bestand is al aanwezig. Je kunt de poort aanpassen:
```
PORT=3000
NODE_ENV=development
```

### Stap 5: Development Mode
Start de development server met hot reload:
```bash
npm run dev
```

Output:
```
N-TECH BV server draait op http://localhost:3000
Environment: development
```

## Andere Commando's

### Production Build
```bash
# TypeScript compileren naar JavaScript
npm run build

# Production server starten
npm start
```

### Port Wijzigen
Wijzig in `.env`:
```
PORT=8080
```

## Website Structuur

Na starten kun je de volgende pagina's bezoeken:

| Pagina | URL | Beschrijving |
|--------|-----|--------------|
| Home | http://localhost:3000/ | Hoofdpagina |
| Over Ons | http://localhost:3000/over-ons | Bedrijfsinformatie |
| Producten | http://localhost:3000/producten | Producten overzicht |
| Diensten | http://localhost:3000/diensten | Diensten overzicht |
| Portfolio | http://localhost:3000/portfolio | Project portfolio |
| Entec Services | http://localhost:3000/entec-services | Entec Services portal |
| Contact | http://localhost:3000/contact | Contactpagina |

## Troubleshooting

### Probleem: "Cannot find module"
**Oplossing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Probleem: "Port 3000 already in use"
**Oplossing 1:** Wijzig port in `.env`:
```
PORT=3001
```

**Oplossing 2:** Stop het proces op poort 3000:
```bash
# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Probleem: "TypeScript errors"
**Oplossing:**
```bash
npm run build
```

### Probleem: Changes niet zichtbaar
**Oplossing:** Hard refresh in browser:
- **Windows/Linux**: Ctrl + Shift + R
- **Mac**: Cmd + Shift + R

## Belangrijke Bestanden

```
ntech-website/
├── src/
│   ├── server.ts           # Hoofdserver - START HIER
│   ├── routes/             # URL routing
│   ├── controllers/        # Business logica
│   ├── views/              # HTML templates (EJS)
│   └── public/             # CSS, JS, images
│       ├── css/style.css   # Alle styling
│       └── images/         # Logo en afbeeldingen
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuratie
└── .env                    # Environment variabelen
```

## Design Aanpassen

### Logo Vervangen
Vervang het bestand:
```
src/public/images/ntech-logo.jpeg
```

### Kleuren Aanpassen
Wijzig in `src/public/css/style.css`:
```css
:root {
  --primary-blue: #2c5f7d;
  --primary-teal: #5ba4b8;
  /* Pas aan naar wens */
}
```

### Content Wijzigen
Wijzig de EJS bestanden in:
```
src/views/pages/
```

## Development Tips

### Hot Reload
Met `npm run dev` worden wijzigingen automatisch herladen.

### Code Formatteren
Gebruik een editor zoals VS Code met:
- ESLint
- Prettier
- TypeScript extensie

### Debugging
In VS Code, maak `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Server",
      "runtimeArgs": ["-r", "ts-node/register"],
      "args": ["${workspaceFolder}/src/server.ts"]
    }
  ]
}
```

## Production Deployment

### Optie 1: Heroku
```bash
# Login
heroku login

# Create app
heroku create ntech-website

# Deploy
git push heroku main
```

### Optie 2: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Optie 3: VPS (Digital Ocean, AWS, etc.)
```bash
# Build
npm run build

# Install PM2
npm install -g pm2

# Start
pm2 start dist/server.js --name ntech-website

# Save PM2 config
pm2 save
pm2 startup
```

## Hulp Nodig?

Contact N-TECH B.V.:
- **Email**: Ntech2017@hotmail.com
- **Telefoon**: +31 6 16 00 97 03
- **Contact**: Nehru Nuri

---

**Success!** Je website zou nu moeten draaien op http://localhost:3000
