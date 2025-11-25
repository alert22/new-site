# 🌸 Olghet Flowers - Sito Web Ufficiale

Sito web moderno e professionale per **Olghet Flowers**, specializzato nella creazione di fiori giganti handmade e corsi online.

## 📋 Descrizione

Olghet Flowers è il punto di riferimento in Italia per fiori giganti realizzati a mano con materiali di alta qualità come carta crespa, organza e gomma EVA. Il sito presenta i nostri servizi, corsi online e le ultime creazioni.

## ✨ Caratteristiche

- **Design Moderno**: Interfaccia elegante e responsive con animazioni fluide
- **Corsi Online**: Integrazione con piattaforma Kwiga per l'acquisto dei corsi
- **Galleria Instagram**: Collegamento diretto al feed Instagram per le ultime creazioni
- **Multilingua Ready**: Struttura pronta per l'espansione multilingua
- **SEO Ottimizzato**: Meta tag e struttura ottimizzata per i motori di ricerca
- **Performance**: Caricamento veloce e ottimizzato

## 🛠️ Tecnologie Utilizzate

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **React Router** - Navigazione SPA
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animazioni fluide
- **Lucide React** - Icone moderne

## 📁 Struttura del Progetto

```
new site/
├── src/
│   ├── assets/          # Immagini e risorse statiche
│   ├── components/      # Componenti React riutilizzabili
│   │   ├── CourseCard.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── data/           # Dati dei corsi
│   │   └── courses.js
│   ├── pages/          # Pagine dell'applicazione
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Courses.jsx
│   │   ├── Creations.jsx
│   │   └── Home.jsx
│   ├── App.jsx         # Componente principale
│   ├── index.css       # Stili globali
│   └── main.jsx        # Entry point
├── public/             # File pubblici statici
├── index.html          # Template HTML
├── package.json        # Dipendenze del progetto
├── tailwind.config.js  # Configurazione Tailwind
└── vite.config.js      # Configurazione Vite
```

## 🚀 Installazione e Avvio

### Prerequisiti

- Node.js (versione 16 o superiore)
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/alert22/new-site.git

# Entra nella directory
cd "new site"

# Installa le dipendenze
npm install
```

### Avvio in Sviluppo

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

### Build per Produzione

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`

### Anteprima Build

```bash
npm run preview
```

## 📄 Pagine del Sito

### 🏠 Home
- Hero section con immagine principale
- Presentazione servizi
- Corsi in evidenza
- Video YouTube integrato
- Sezione "Perché scegliere i nostri corsi"

### 📚 Corsi Online
- Catalogo completo dei corsi
- Card interattive con dettagli
- Link diretti alla piattaforma Kwiga per l'acquisto

### 🎨 Creazioni
- Integrazione con Instagram
- Link diretto al feed @olghet_flowers
- Showcase delle ultime creazioni

### 👤 Chi Sono
- Biografia di Olga Korniychuk
- Foto e presentazione personale
- Storia e passione per i fiori giganti

### 📞 Contatti
- Form di contatto
- Informazioni di contatto (telefono, email, WhatsApp)
- Località: Avellino, Italia
- Informazioni spedizioni (Italia e UE)

## 🎨 Personalizzazione Colori

I colori del brand sono definiti in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#fdf4f5',
    100: '#fce7eb',
    // ... altri toni
    900: '#831843',
  },
  gold: {
    // Toni oro per accenti
  }
}
```

## 📱 Social Media

- **Instagram**: [@olghet_flowers](https://www.instagram.com/olghet_flowers/)
- **Facebook**: [olghetflowers](https://www.facebook.com/olghetflowers)
- **TikTok**: [@fiorigiganti_olghet](https://www.tiktok.com/@fiorigiganti_olghet)
- **YouTube**: [Olghet Flowers](https://www.youtube.com/channel/UCsgFql8yTJ7OfYpiuF9r49Q)
- **Pinterest**: [olghetflowers](https://it.pinterest.com/olghetflowers/)

## 🔗 Link Utili

- **Piattaforma Corsi**: [olghetflowers.kwiga.com](https://olghetflowers.kwiga.com)
- **Email**: olghetflowers@gmail.com
- **Telefono/WhatsApp**: +39 320 2921978

## 📝 Aggiornamenti Recenti

### Version 2.0 (Novembre 2025)
- ✅ Aggiunto video YouTube nella home
- ✅ Integrazione completa social media nel footer
- ✅ Nuova pagina Creazioni con link Instagram
- ✅ Immagini showcase eventi (FENDI, Yamamay)
- ✅ Aggiornate informazioni località e spedizioni
- ✅ Fix bug pagina About
- ✅ Miglioramenti UI/UX generali

## 👥 Autore

**Olga Korniychuk** - Flower Artist  
Olghet Flowers di Olga Korniychuk  
P.IVA: 03130420643

## 📄 Licenza

© 2025 Olghet Flowers. Tutti i diritti riservati.

## 🤝 Contributi

Per segnalazioni di bug o richieste di funzionalità, contattare via email: olghetflowers@gmail.com

---

**Fatto con ❤️ e 🌸 da Olghet Flowers**
