# ⚡ QUICK START - N-TECH Website

## 3 Stappen om Te Starten

### 1. Installeer Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
```
http://localhost:3000
```

**Klaar!** De website draait nu lokaal.

---

## 📱 Test Alle Pagina's

Probeer deze URL's:
- http://localhost:3000/ (Home)
- http://localhost:3000/over-ons
- http://localhost:3000/producten
- http://localhost:3000/diensten
- http://localhost:3000/portfolio
- http://localhost:3000/entec-services
- http://localhost:3000/contact

---

## Aanpassen

### Logo Wijzigen
Vervang: `src/public/images/ntech-logo.jpeg`

### Kleuren Wijzigen
Edit: `src/public/css/style.css`
```css
:root {
  --primary-blue: #2c5f7d;
  --primary-teal: #5ba4b8;
}
```

### Content Wijzigen
Edit bestanden in: `src/views/pages/`

### Contact Info Wijzigen
Edit: `src/controllers/contactController.ts`

---

## Production Build

```bash
# Build
npm run build

# Start production
npm start
```

---

## Tips

- Wijzigingen worden automatisch herladen in dev mode
- Gebruik Ctrl+C om de server te stoppen
- Check de console voor errors

---

## Hulp Nodig?

**N-TECH B.V.**
- Email: Ntech2017@hotmail.com
- Telefoon: +31 6 16 00 97 03

---

Voor uitgebreide instructies, zie: `INSTALLATIE.md`
Voor volledige documentatie, zie: `README.md`
