// ── DATA ──────────────────────────────────────────────────────────────────

const DATA = {
  "2-4": {
    label: "2–4 roky",
    emoji: "🌱",
    co_resi: "Dítě objevuje své tělo, zajímá se o těla ostatních (sourozenec, rodič). Začíná si uvědomovat rozdíly mezi pohlavími. Může sahat na genitálie — to je normální výzkum, ne sexuální chování.",
    jak_mluvit: [
      { veta: "„To jsou tvoje soukromé části. Patří jen tobě."", kontext: "Když dítě sahá na sebe nebo na jiné." },
      { veta: "„Tohle se dělá jen v soukromí, v pokojíčku — ne u stolu nebo ve školce."", kontext: "Bez dramatizace, klidným tónem." },
      { veta: "„To se jmenuje penis / vulva."", kontext: "Při koupání nebo oblékání — prostě a přirozeně." }
    ],
    pozor: "Nikdy se nesměj ani nezahanbuj. Zájem o tělo je přirozený. Tvá reakce nastaví, zda za tebou dítě přijde i příště.",
    knihy: [
      { nazev: "Kde bydlím? (Robie Harris)", popis: "Krásně ilustrovaná knížka o těle pro nejmenší." },
      { nazev: "Jak se dělají děti (Babette Cole)", popis: "Hravě a s humorem — dobré pro první otázky." }
    ],
    pracovni_list: "Pojmenuj části těla — obrázek pro děti 2–4 roky s prostorem pro doplnění správných názvů."
  },
  "4-6": {
    label: "4–6 let",
    emoji: "🌿",
    co_resi: "Přicházejí první otázky: Odkud jsem přišel/a? Proč má brácha jiné tělo? Zájem o těhotenství, porod. Hra na doktory je normální — pokud není nucená nebo tajná.",
    jak_mluvit: [
      { veta: "„Když se mami a tati mají rádi, mohou si být velmi blízko. Z té lásky může v bříšku vyrůst miminko."", kontext: "Na otázku odkud se berou děti — pravdivě a jednoduše." },
      { veta: "„Dívky mají vulvu a vagínu, chlapci mají penis a varlata. To je přirozené."", kontext: "Na otázku proč jsme jiní — bez tajemství." },
      { veta: "„Pokud tě někdo žádá dělat věci s tělem a má to být tajemství — přijď za mnou."", kontext: "Základ bezpečnostního pravidla." }
    ],
    pozor: "Hra na doktory je normální zvědavost. Zakázat ji ostře může vyvolat pocit hanby. Lepší je klidně nastavit pravidla: bez bolesti, bez nucení.",
    knihy: [
      { nazev: "Jak se dělají děti (Robie Harris, 4–8 let)", popis: "Odpovídá přesně na otázky tohoto věku." },
      { nazev: "Moje tělo patří mně (Jill Starishevsky)", popis: "O bezpečí těla a bezpečných tajemstvích." }
    ],
    pracovni_list: "Pohádkový příběh o mimince v bříšku — s místem pro vlastní kresbu a otázkami k povídání."
  },
  "6-8": {
    label: "6–8 let",
    emoji: "🌳",
    co_resi: "Dítě přichází se zprávami od spolužáků — mnohdy nepřesnými. Může narazit na nevhodný obsah online. Začíná chápat soukromí a intimitní zónu. Zájem o romantické vztahy (filmy, pohádky).",
    jak_mluvit: [
      { veta: "„Slyšel/a jsi od kamarádů něco o tomhle? Řekni mi, co sis myslel/a."", kontext: "Otevřít téma přirozeně, bez výslechu." },
      { veta: "„Pokud na internetu uvidíš něco divného nebo nepříjemného — přijď za mnou. Nezlobím se, i kdyby to bylo divné."", kontext: "Preventivně, bez zakazování." },
      { veta: "„Správné a bezpečné objetí je takové, kdy obě strany chtějí."", kontext: "O souhlasu — srozumitelně pro tento věk." }
    ],
    pozor: "Toto je klíčové věkové okno pro prevenci. Dítě ještě věří rodičům více než vrstevníkům. Za 2–3 roky se to otočí.",
    knihy: [
      { nazev: "Velká kniha o těle (DK)", popis: "Vědecky přesná, hravá — pro zvídavé děti." },
      { nazev: "Co se děje s mým tělem (Lynda Madaras)", popis: "Verze pro dívky i pro chlapce, velmi přístupná." }
    ],
    pracovni_list: "Bezpečné a nebezpečné situace — komiksový pracovní list pro rozpoznání hranic."
  },
  "9-11": {
    label: "9–11 let",
    emoji: "🌺",
    co_resi: "Tělesné změny — puberta se blíží nebo začíná. Zájem o romantiku, první lásky. Intenzivní potřeba soukromí. Dívky se mohou ptát na menstruaci, chlapci na noční poluce a erekce.",
    jak_mluvit: [
      { veta: "„Chci ti říct o změnách, které přijdou, dřív než přijdou — abys nebyla/nebyl zaskočen/a."", kontext: "Proaktivně — ne čekat na otázky." },
      { veta: "„Menstruace je znamení, že tvoje tělo dospívá. Je to normální a dobré."", kontext: "Bez trapnosti, věcně." },
      { veta: "„Chlapci mívají erekce nebo noční poluce — to je přirozená součást dospívání."", kontext: "Preventivně, než se to stane." }
    ],
    pozor: "Dítě potřebuje soukromí — a zároveň ví, že může přijít. Tyto dvě věci nejsou v rozporu. Nabídni, nekuč se.",
    knihy: [
      { nazev: "Puberta (Anke Napp)", popis: "Pro 8–12 let, věcná, hezky ilustrovaná, bez pátosu." },
      { nazev: "Holčičí průvodce pubertou (American Girl)", popis: "Velmi oblíbená u dívek." }
    ],
    pracovni_list: "Deník změn — soukromý arch pro sledování fyzických a emočních změn s průvodními otázkami."
  },
  "12-14": {
    label: "12–14 let",
    emoji: "🌸",
    co_resi: "Vztahy, první polibky a intimní zájmy. Pornografie — valná většina dětí ji v tomto věku vidí. Identita, orientace. Tlak vrstevníků. Online bezpečí. Souhlas a hranice v reálných vztazích.",
    jak_mluvit: [
      { veta: "„Hodně dětí v tvém věku narazilo na pornografii. Chci ti říct, jak to doopravdy funguje mezi lidmi — je to jiné."", kontext: "Bez obviňování — prevence dezinformací." },
      { veta: "„Pokud by tě někdo tlačil do něčeho, co nechceš — i kamarád nebo partner — je to špatně. A mně to můžeš říct."", kontext: "O souhlasu v konkrétních situacích." },
      { veta: "„Nikdy se tě na nic nezeptám, co ti nevadí říct. Ale jsem tady, když budeš chtít."", kontext: "Udržet přítomnost bez tlaku." }
    ],
    pozor: "Nereaguj panikou na to, co se dozvíš. Pokud teenageři vědí, že rodič zpanikuje, přestanou říkat pravdu.",
    knihy: [
      { nazev: "Amaze.org / YouTube kanál", popis: "Videa pro teenagery o vztazích, souhlasu, těle — kvalitní, bez moralizování." },
      { nazev: "Dan Siegel: Bouřlivá léta", popis: "Pro rodiče — proč se teenage mozek chová jak se chová." }
    ],
    pracovni_list: "Scénáře pro rozhodování — co bys dělal/a kdybys... — karty pro rozhovor s teenagerem."
  },
  "15+": {
    label: "15+ let",
    emoji: "🦋",
    co_resi: "Aktivní nebo blížící se sexuální život. Antikoncepce, STI prevence. Zdravé vs. nezdravé vztahy. Digitální stopy. Emoční dopad intimních vztahů.",
    jak_mluvit: [
      { veta: "„Ať se rozhodneš cokoliv — chci, aby ses cítil/a bezpečně. Mluvit se mnou o antikoncepci není souhlas, že to schvaluju — je to starost o tebe."", kontext: "Otevřít téma praktické bezpečnosti." },
      { veta: "„Zdravý vztah je takový, kde se oba cítí svobodně říct ne nebo stop."", kontext: "O souhlasu v dospělém smyslu." },
      { veta: "„Nikdy nepošli intimní fotky — ani partnerovi. Jednou poslané, nelze vzít zpět."", kontext: "Prakticky a bez kázání." }
    ],
    pozor: "V tomto věku je rodič průvodce, ne hlídač. Pokud chceš, aby se tvé dítě chovalo zodpovědně, musí cítit, že mu věříš.",
    knihy: [
      { nazev: "Emily Nagoski: Jak funguje ženská sexualita", popis: "Pro starší dívky a jejich maminky — průlomová." },
      { nazev: "The Teenage Brain (Frances Jensen)", popis: "Pro rodiče — věda o mozku teenagera." }
    ],
    pracovni_list: "Průvodce zdravými vztahy — kontrolní seznam signálů zdravého a nezdravého vztahu."
  }
};

// ── STATE ─────────────────────────────────────────────────────────────────

let currentVek = null;
let currentTab = "jak";

// ── RENDER ────────────────────────────────────────────────────────────────

function renderAgeButtons() {
  const grid = document.getElementById("age-grid");
  grid.innerHTML = Object.entries(DATA).map(([key, val]) => `
    <button class="age-btn${currentVek === key ? ' active' : ''}"
            onclick="selectAge('${key}')"
            aria-pressed="${currentVek === key}">
      <span class="emoji">${val.emoji}</span>
      <span>${val.label}</span>
    </button>
  `).join("");
}

function renderContent() {
  const contentEl = document.getElementById("content");
  const emptyEl   = document.getElementById("empty");

  if (!currentVek) {
    contentEl.innerHTML = "";
    emptyEl.style.display = "block";
    return;
  }

  emptyEl.style.display = "none";
  const d = DATA[currentVek];

  const tabs = [
    { id: "jak",   icon: "💬", label: "Jak mluvit" },
    { id: "pozor", icon: "⚠️", label: "Pozor na" },
    { id: "knihy", icon: "📚", label: "Knihy" },
    { id: "list",  icon: "📄", label: "Pracovní list" },
  ];

  contentEl.innerHTML = `
    <div class="fade-in">

      <!-- TOPIC -->
      <div class="topic-card">
        <div class="label">Co dítě v tomto věku řeší</div>
        <p>${d.co_resi}</p>
      </div>

      <!-- TABS -->
      <div class="tabs" role="tablist">
        ${tabs.map(t => `
          <button class="tab-btn${currentTab === t.id ? ' active' : ''}"
                  role="tab"
                  aria-selected="${currentTab === t.id}"
                  onclick="selectTab('${t.id}')">
            <span class="tab-icon">${t.icon}</span>
            <span>${t.label}</span>
          </button>
        `).join("")}
      </div>

      <!-- PANELS -->
      <div id="panel-jak"   class="panel${currentTab === 'jak'   ? ' active' : ''}">
        ${d.jak_mluvit.map(item => `
          <div class="veta-card">
            <div class="veta-text">${item.veta}</div>
            <div class="veta-kontext">${item.kontext}</div>
          </div>
        `).join("")}
      </div>

      <div id="panel-pozor" class="panel${currentTab === 'pozor' ? ' active' : ''}">
        <div class="pozor-card">
          <div class="pozor-header">
            <span>⚠️</span>
            <div class="label">Na co si dát pozor</div>
          </div>
          <p>${d.pozor}</p>
        </div>
      </div>

      <div id="panel-knihy" class="panel${currentTab === 'knihy' ? ' active' : ''}">
        ${d.knihy.map(k => `
          <div class="kniha-card">
            <div class="kniha-icon">📖</div>
            <div>
              <div class="kniha-nazev">${k.nazev}</div>
              <div class="kniha-popis">${k.popis}</div>
            </div>
          </div>
        `).join("")}
      </div>

      <div id="panel-list"  class="panel${currentTab === 'list'  ? ' active' : ''}">
        <div class="list-card">
          <div class="label">Pracovní list pro toto věkové pásmo</div>
          <p>${d.pracovni_list}</p>
          <div class="list-note">💡 Pracovní listy jsou dostupné u lektorky besedy nebo v tištěném setu po skončení programu.</div>
        </div>
      </div>

      <!-- QUOTE -->
      <div class="quote-card">
        <div class="label">Zapamatuj si</div>
        <p>Na otázku dítěte není špatná odpověď. Horší než nedokonalá odpověď je ticho.</p>
      </div>

    </div>
  `;
}

// ── ACTIONS ───────────────────────────────────────────────────────────────

function selectAge(key) {
  currentVek = key;
  currentTab = "jak";
  renderAgeButtons();
  renderContent();
  // Scroll to content smoothly on mobile
  setTimeout(() => {
    const contentEl = document.getElementById("content");
    if (contentEl && contentEl.firstElementChild) {
      contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 50);
}

function selectTab(tab) {
  currentTab = tab;
  // Update tab buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    const active = btn.getAttribute("onclick") === `selectTab('${tab}')`;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active);
  });
  // Update panels
  document.querySelectorAll(".panel").forEach(p => {
    p.classList.remove("active");
  });
  const panel = document.getElementById("panel-" + tab);
  if (panel) panel.classList.add("active");
}

// ── PWA: INSTALL PROMPT ───────────────────────────────────────────────────

let deferredPrompt = null;
const banner   = document.getElementById("install-banner");
const btnInstall = document.getElementById("btn-install");
const btnDismiss = document.getElementById("btn-dismiss");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Show after small delay so it doesn't feel jarring
  setTimeout(() => banner.classList.add("show"), 3000);
});

btnInstall.addEventListener("click", async () => {
  banner.classList.remove("show");
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  }
});

btnDismiss.addEventListener("click", () => {
  banner.classList.remove("show");
});

window.addEventListener("appinstalled", () => {
  banner.classList.remove("show");
  deferredPrompt = null;
});

// ── INIT ──────────────────────────────────────────────────────────────────

renderAgeButtons();
renderContent();

// ── SERVICE WORKER ────────────────────────────────────────────────────────
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
