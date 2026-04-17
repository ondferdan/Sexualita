# Průvodce pro rodiče — Sexualita u dětí

PWA aplikace jako průvodce pro rodiče podle věku dítěte.

## Instalace na GitHub Pages (5 minut)

### 1. Vytvoř nový repozitář na GitHubu
- Jdi na [github.com/new](https://github.com/new)
- Název: `pruvodce-rodice` (nebo cokoliv)
- Viditelnost: **Public** (nutné pro free GitHub Pages)
- Klikni **Create repository**

### 2. Nahraj soubory
Máš dvě možnosti:

**A) Přes webové rozhraní (jednodušší):**
- Na stránce repozitáře klikni **uploading an existing file**
- Přetáhni všechny soubory z tohoto ZIPu (včetně složky `icons/`)
- Klikni **Commit changes**

**B) Přes Git (pokud máš nainstalovaný):**
```bash
git init
git add .
git commit -m "první verze"
git remote add origin https://github.com/TVOJE_JMENO/pruvodce-rodice.git
git push -u origin main
```

### 3. Zapni GitHub Pages
- V repozitáři jdi na **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: **main**, složka: **/ (root)**
- Klikni **Save**

### 4. Hotovo!
Za 1–2 minuty bude appka dostupná na:
```
https://TVOJE_JMENO.github.io/pruvodce-rodice/
```

Tento odkaz / QR kód sdílíš rodičům. Na mobilu nabídne instalaci na plochu.

---

## Aktualizace obsahu

Uprav soubor `app.js` — data jsou na začátku v konstantě `DATA`.  
Po pushnutí změn na GitHub se appka automaticky aktualizuje.

## Struktura souborů

```
index.html      — hlavní stránka
app.js          — data + logika
manifest.json   — PWA konfigurace
sw.js           — service worker (offline podpora)
icons/          — ikony pro instalaci
README.md       — tento soubor
```
