# PS Skylt & Inredning - Webbplats

Modern, responsiv webbplats för PS Skylt & Inredning AB med komplett CMS-funktionalitet för enkel innehållshantering.

## 📋 Innehållsförteckning

- [Om projektet](#om-projektet)
- [Teknisk stack](#teknisk-stack)
- [Installation](#installation)
- [Sanity CMS - Adminportalen](#sanity-cms---adminportalen)
- [Hur man redigerar innehåll](#hur-man-redigerar-innehåll)
- [Projektstruktur](#projektstruktur)
- [Utveckling](#utveckling)
- [Deployment](#deployment)

## 🎯 Om projektet

Denna webbplats är byggd för PS Skylt & Inredning AB och innehåller:

- **Startsida** med hero, tjänsteöversikt, process, case och kontaktformulär
- **Tjänstesidor** för Uteservering, Skyltprojekt och Solskydd
- **Case-studier** med filter och detaljsidor
- **Om oss-sida** med företagshistoria och team
- **Kunskapsblogg** för artiklar och guider
- **Kontaktsida** med formulär

**VIKTIGT:** All text och alla bilder kan redigeras via adminportalen - ingen kod behöver ändras!

## 🛠 Teknisk stack

- **Framework:** Next.js 16 (App Router)
- **Språk:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Sanity Studio (headless CMS)
- **Deployment:** Vercel/Netlify/egen server

## 🚀 Installation

### 1. Installera dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Skapa Sanity-projekt

1. Gå till [sanity.io](https://www.sanity.io/) och skapa ett konto
2. Skapa ett nytt projekt
3. Kopiera Project ID

### 3. Konfigurera miljövariabler

Skapa en `.env.local`-fil i projektets rot:

\`\`\`env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id-here"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-11-13"
\`\`\`

### 4. Starta utvecklingsservern

\`\`\`bash
npm run dev
\`\`\`

Webbplatsen öppnas på `http://localhost:3000`

### 5. Öppna Sanity Studio (adminportalen)

Navigera till `http://localhost:3000/studio` i webbläsaren.

Vid första besöket kommer du att bli ombedd att logga in med ditt Sanity-konto.

## 🎨 Sanity CMS - Adminportalen

### Komma åt adminportalen

Adminportalen finns på: **`https://din-domän.se/studio`**

Första gången behöver du:
1. Logga in med ditt Sanity-konto
2. Ge behörighet till projektet

### Vad kan du redigera?

I adminportalen kan du redigera ALLT innehåll på webbplatsen:

#### 📄 Sidor
- **Startsida** - Hero, tjänster, varför PS, process, case, citat
- **Om oss** - Historia, organisation, team, statistik
- **Kontakt** - Kontaktinformation, kontor, formulärtext

#### 🛠 Tjänster
- **Uteserveringsprojekt**
- **Skyltprojekt & skyltprogram**
- **Solskydd**

För varje tjänst kan du redigera:
- Titel och beskrivning
- Hero-bild och text
- Vad ni levererar (punktlista)
- Process-steg
- Kopplade case-studier
- SEO-information

#### 📦 Case-studier
Skapa och redigera projekt med:
- Projekttitel och kund
- Plats och kategori
- Kort beskrivning
- Utmaning, lösning och resultat
- Bildgalleri
- Kundcitat

#### 📝 Blogg/Kunskap
Skapa artiklar och guider med:
- Titel och ingress
- Kategori (Uteservering, Skyltning, Solskydd, etc.)
- Rich text-innehåll med bilder
- Författare
- SEO-optimering

#### 💬 Kundcitat
Lägg till nya kundcitat med:
- Citat-text
- Namn, roll och företag
- Bild (valfritt)

#### 👥 Teammedlemmar
Hantera teamet:
- Namn och roll
- Bild
- Biografi
- Kontaktuppgifter

#### ⚙️ Inställningar
Globala inställningar för hela sajten:
- Logotyp
- Kontaktinformation
- Sociala medier
- SEO-beskrivning

## 📝 Hur man redigerar innehåll

### Grundläggande redigering

1. **Logga in på adminportalen** (`/studio`)
2. **Välj innehållstyp** från vänstermenyn (t.ex. "Startsida", "Tjänstesidor", "Case-studier")
3. **Redigera innehåll** - alla fält är självförklarande på svenska
4. **Publicera** genom att klicka på "Publish" (blå knapp uppe till höger)

### Lägga till bilder

1. Klicka på **"Select"** eller **"Upload"** i ett bildfält
2. Dra och släpp din bild eller välj från datorn
3. Beskär bilden med "Hotspot" om du vill välja fokuspunkt
4. Klicka **"Upload"**

**Rekommenderade bildstorlekar:**
- Hero-bilder: 1920x1080px
- Case-bilder: 1200x800px
- Team-bilder: 800x800px
- Thumbnails: 600x400px

### Skapa ny case-studie

1. Gå till **"Case-studier"** i vänstermenyn
2. Klicka på **"+"** (plus-ikonen)
3. Fyll i alla fält:
   - Projekttitel (t.ex. "Uteservering Restaurang X")
   - Kund och plats
   - Välj kategori (Uteservering/Skyltprojekt/Solskydd)
   - Kort beskrivning
   - Ladda upp huvudbild
   - Beskriv utmaning, lösning och resultat
   - Lägg till bildgalleri
4. Klicka **"Publish"**

Ny case syns direkt på case-sidan!

### Skapa ny bloggartikel

1. Gå till **"Blogg/Kunskap"**
2. Klicka på **"+"**
3. Fyll i:
   - Titel och ingress
   - Välj kategori
   - Ladda upp utvald bild
   - Skriv innehåll i rich text-editorn
   - Välj publiceringsdatum
4. Klicka **"Publish"**

### Redigera startsidan

1. Gå till **"Startsida"**
2. Du ser alla sektioner:
   - **Hero** - Rubrik, underrubrik, knappar, bakgrundsbild
   - **Tjänstesektion** - Välj vilka 3 tjänster som ska visas
   - **Varför PS** - Lägg till/ta bort/redigera fördelar
   - **Process** - Koppla till process-steg
   - **Utvalda projekt** - Välj case som ska visas
   - **Fokussektion** - Text och bild för uteserveringar
   - **Kundcitat** - Välj vilka citat som ska visas
3. Redigera det du vill ändra
4. Klicka **"Publish"**

### SEO-optimering

För varje sida och artikel kan du redigera:
- **SEO Titel** - Visas i Googles sökresultat (max 60 tecken)
- **SEO Beskrivning** - Kort beskrivning (max 160 tecken)

**Tips:**
- Använd relevanta sökord
- Gör titeln lockande
- Beskriv tydligt vad sidan handlar om

## 📁 Projektstruktur

\`\`\`
ps-skylt-web/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── contact/              # Kontaktformulär API
│   ├── studio/                   # Sanity Studio (adminportal)
│   ├── case/                     # Case-sidor
│   ├── tjanster/                 # Tjänstesidor
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Startsida
│   └── globals.css               # Global CSS
├── components/                   # React-komponenter
│   ├── layout/                   # Layout-komponenter
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/                       # UI-komponenter
│   │   └── ContactForm.tsx
│   └── sections/                 # Sektion-komponenter
├── sanity/                       # Sanity CMS-konfiguration
│   ├── schemas/                  # Content schemas
│   │   ├── index.ts
│   │   ├── settings.ts
│   │   ├── homePage.ts
│   │   ├── servicePage.ts
│   │   ├── caseStudy.ts
│   │   ├── blogPost.ts
│   │   └── ...
│   └── lib/                      # Sanity utilities
│       ├── client.ts
│       └── image.ts
├── public/                       # Statiska filer
│   ├── ps-logo-grey.svg
│   ├── ps-logo-white.svg
│   └── ps-klammer.png
├── sanity.config.ts              # Sanity Studio-konfiguration
├── tailwind.config.ts            # Tailwind CSS-konfiguration
└── package.json
\`\`\`

## 💻 Utveckling

### Köra lokalt

\`\`\`bash
npm run dev
\`\`\`

- Webbplats: `http://localhost:3000`
- Adminportal: `http://localhost:3000/studio`

### Bygga för produktion

\`\`\`bash
npm run build
npm run start
\`\`\`

### Linting

\`\`\`bash
npm run lint
\`\`\`

## 🌐 Deployment

### Rekommenderad: Vercel (officiell Next.js-plattform)

1. Skapa konto på [vercel.com](https://vercel.com)
2. Koppla GitHub-repot
3. Lägg till miljövariabler (samma som i `.env.local`)
4. Klicka "Deploy"

Webbplatsen uppdateras automatiskt vid varje push till GitHub!

### Alternativ: Netlify, egen server

Projektet kan också deployas till Netlify eller egen server med Node.js.

## 🎨 Grafisk profil

Webbplatsen följer PS Skylt & Inrednings grafiska manual:

### Färger
- **PS Grå:** `#4B4A49` (RGB 75, 74, 73)
- **PS Gul:** `#EBBF01` (RGB 235, 191, 1) - Accentfärg
- **PS Svart:** `#12110C` (RGB 18, 17, 12)

### Typografi
- **Rubriker:** Avenir Next LT Pro Demi
- **Brödtext:** Brandon Grotesque Regular

### PS-klammer
Det gula klammret används för att rama in viktiga rubriker och ord.

## 🆘 Support & Felsökning

### Vanliga problem

**Problem:** Innehåll uppdateras inte på webbplatsen efter redigering i CMS
**Lösning:** Det kan ta upp till 60 sekunder innan ändringar syns. Hårduppdatera sidan (Ctrl+Shift+R / Cmd+Shift+R)

**Problem:** Kan inte logga in på `/studio`
**Lösning:**
1. Kontrollera att du har rätt Sanity Project ID i `.env.local`
2. Logga in på sanity.io och verifiera att du har tillgång till projektet

**Problem:** Bilder visas inte
**Lösning:** Kontrollera att bilden är uppladdad i Sanity Studio och att `NEXT_PUBLIC_SANITY_PROJECT_ID` är korrekt

### Behöver du hjälp?

Kontakta webbutvecklaren som satte upp projektet eller:
- Sanity Support: https://www.sanity.io/help
- Next.js Documentation: https://nextjs.org/docs

## 📄 Licens

Detta projekt är ägt av PS Skylt & Inredning AB.

---

**Byggt med ❤️ för PS Skylt & Inredning AB**
