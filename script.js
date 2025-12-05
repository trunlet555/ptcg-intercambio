// Datos simulados para cartas y usuarios
const cartas = [
  {
    nombre: 'Charizard V',
    codigo: 'SWSH260',
    juego: 'Pokémon',
    idioma: 'Español',
    estado: 'Near Mint',
    tipo: 'Intercambio/Venta',
    distancia: 3,
    usuario: '@NeoTrainer',
    ciudad: 'Madrid',
    img: 'https://images.unsplash.com/photo-1608198399989-106fb8945c4a?auto=format&fit=crop&w=400&q=80'
  },
  {
    nombre: 'Pikachu Full Art',
    codigo: 'VIV004',
    juego: 'Pokémon',
    idioma: 'Inglés',
    estado: 'Good',
    tipo: 'Intercambio',
    distancia: 8,
    usuario: '@LuzTCG',
    ciudad: 'Madrid',
    img: 'https://images.unsplash.com/photo-1613478881181-59337f2186d6?auto=format&fit=crop&w=400&q=80'
  },
  {
    nombre: 'Black Lotus',
    codigo: 'LEB233',
    juego: 'Magic',
    idioma: 'Inglés',
    estado: 'Played',
    tipo: 'Venta',
    distancia: 15,
    usuario: '@Coleccionista78',
    ciudad: 'Alcalá de Henares',
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=400&q=80'
  },
  {
    nombre: 'Blue-Eyes White Dragon',
    codigo: 'LOB-001',
    juego: 'Yu-Gi-Oh!',
    idioma: 'Español',
    estado: 'Near Mint',
    tipo: 'Intercambio',
    distancia: 2,
    usuario: '@YugiPro',
    ciudad: 'Getafe',
    img: 'https://images.unsplash.com/photo-1591054332837-1be32e60c1dc?auto=format&fit=crop&w=400&q=80'
  },
  {
    nombre: 'Yamato (Alt-Art)',
    codigo: 'OP01-121',
    juego: 'One Piece',
    idioma: 'Japonés',
    estado: 'Near Mint',
    tipo: 'Intercambio/Venta',
    distancia: 6,
    usuario: '@OPFan',
    ciudad: 'Madrid',
    img: 'https://images.unsplash.com/photo-1606117330850-1b38922385f8?auto=format&fit=crop&w=400&q=80'
  }
];

const perfiles = [
  {
    usuario: '@NeoTrainer',
    tipo: 'Jugador',
    ciudad: 'Madrid (Centro)',
    descripcion: 'Competitivo de Pokémon y fan de cartas promo.',
    tengo: ['Charizard V', 'Arceus VSTAR', 'Lugia V'],
    busco: ['Mewtwo VSTAR', 'Giratina VSTAR'],
  },
  {
    usuario: '@LuzTCG',
    tipo: 'Coleccionista',
    ciudad: 'Madrid (Moncloa)',
    descripcion: 'Colecciono artes alternativas y cartas en español.',
    tengo: ['Pikachu Full Art', 'Umbreon Gold Star'],
    busco: ['Charizard VMAX', 'Marnie Full Art'],
  },
  {
    usuario: '@Coleccionista78',
    tipo: 'Ambos',
    ciudad: 'Alcalá de Henares',
    descripcion: 'Vintage de Magic y Pokémon 1ª edición.',
    tengo: ['Black Lotus', 'Ancestral Recall'],
    busco: ['Tropical Island', 'Pikachu Illustrator'],
  }
];

const matches = [
  {
    entre: '@NeoTrainer ↔ @LuzTCG',
    yoTengo: ['Charizard V', 'Lugia V'],
    tuBuscas: ['Marnie Full Art'],
    elTiene: ['Pikachu Full Art'],
    yoBusco: ['Mewtwo VSTAR'],
  },
  {
    entre: '@Coleccionista78 ↔ @YugiPro',
    yoTengo: ['Black Lotus'],
    tuBuscas: ['Blue-Eyes White Dragon'],
    elTiene: ['Dark Magician'],
    yoBusco: ['Tropical Island'],
  }
];

// Utilidades de renderizado
const cardsGrid = document.getElementById('cardsGrid');
const profileGrid = document.getElementById('profileGrid');
const matchGrid = document.getElementById('matchGrid');

function crearPill(texto, clase = '') {
  const span = document.createElement('span');
  span.className = `pill ${clase}`.trim();
  span.textContent = texto;
  return span;
}

function renderCartas(list) {
  cardsGrid.innerHTML = '';
  list.forEach(card => {
    const item = document.createElement('article');
    item.className = 'card-item';
    item.innerHTML = `
      <div class="card-header">
        <div>
          <p class="pill pill--blue">${card.juego}</p>
          <h3 class="card-title">${card.nombre} <span class="muted">${card.codigo}</span></h3>
          <p class="muted">${card.ciudad} · a ${card.distancia} km</p>
        </div>
        <img src="${card.img}" alt="${card.nombre}" loading="lazy">
      </div>
      <div class="card-meta">
        ${crearPill(card.tipo, 'pill--gold').outerHTML}
        ${crearPill(card.estado).outerHTML}
        ${crearPill(card.idioma).outerHTML}
      </div>
      <div class="card-footer">
        <p class="muted">Anuncio de ${card.usuario}</p>
        <div class="card-actions">
          <button class="btn btn--ghost">Ver perfil</button>
          <button class="btn">Proponer intercambio</button>
        </div>
      </div>
    `;
    cardsGrid.appendChild(item);
  });
}

function renderPerfiles() {
  profileGrid.innerHTML = '';
  perfiles.forEach(profile => {
    const card = document.createElement('article');
    card.className = 'profile-card';
    card.innerHTML = `
      <div class="profile-head">
        <div class="avatar">${profile.usuario.slice(1,3)}</div>
        <div>
          <h3>${profile.usuario}</h3>
          <p class="muted">${profile.ciudad}</p>
        </div>
      </div>
      <p class="muted">${profile.descripcion}</p>
      <div class="list-inline">
        <span class="tag">${profile.tipo}</span>
      </div>
      <div>
        <strong>TENGO:</strong>
        <div class="list-inline">
          ${profile.tengo.map(t => `<span class="pill pill--blue">${t}</span>`).join('')}
        </div>
      </div>
      <div>
        <strong>BUSCO:</strong>
        <div class="list-inline">
          ${profile.busco.map(t => `<span class="pill pill--purple">${t}</span>`).join('')}
        </div>
      </div>
      <div class="card-actions">
        <button class="btn">Enviar mensaje</button>
        <button class="btn btn--ghost">Proponer intercambio</button>
      </div>
    `;
    profileGrid.appendChild(card);
  });
}

function renderMatches() {
  matchGrid.innerHTML = '';
  matches.forEach(match => {
    const card = document.createElement('article');
    card.className = 'match-card';
    card.innerHTML = `
      <p class="pill pill--purple">${match.entre}</p>
      <p><strong>Tú tienes</strong> ➜ ${match.yoTengo.join(', ')}</p>
      <p class="muted">Coinciden con lo que busca la otra persona: ${match.tuBuscas.join(', ')}</p>
      <p><strong>La otra persona tiene</strong> ➜ ${match.elTiene.join(', ')}</p>
      <p class="muted">Y tú buscas: ${match.yoBusco.join(', ')}</p>
      <div class="card-actions">
        <button class="btn">Ver posible intercambio</button>
        <button class="btn btn--ghost">Guardar</button>
      </div>
    `;
    matchGrid.appendChild(card);
  });
}

function aplicarFiltros() {
  const juego = document.getElementById('filtroJuego').value;
  const tipo = document.getElementById('filtroTipo').value;
  const idioma = document.getElementById('filtroIdioma').value;
  const estado = document.getElementById('filtroEstado').value;
  const radio = document.getElementById('filtroRadio').value;
  let resultado = cartas.filter(c =>
    (!juego || c.juego === juego) &&
    (!tipo || c.tipo === tipo) &&
    (!idioma || c.idioma === idioma) &&
    (!estado || c.estado === estado) &&
    (!radio || c.distancia <= Number(radio))
  );
  renderCartas(resultado);
}

function scrollToSection(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Eventos básicos de navegación simulada
['ctaExplorar','busquedaBtn'].forEach(id => {
  document.getElementById(id).addEventListener('click', () => scrollToSection('#listado'));
});
['ctaCrear','footerCTA'].forEach(id => {
  document.getElementById(id).addEventListener('click', () => scrollToSection('#perfiles'));
});

document.getElementById('busquedaRapida').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') scrollToSection('#listado');
});

['filtroJuego','filtroTipo','filtroIdioma','filtroEstado','filtroRadio'].forEach(id => {
  document.getElementById(id).addEventListener('change', aplicarFiltros);
});

// Tema claro / oscuro
const themeToggle = document.getElementById('themeToggle');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
document.documentElement.dataset.theme = prefersLight ? 'light' : 'dark';

function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = current === 'dark' ? 'light' : 'dark';
  themeToggle.textContent = document.documentElement.dataset.theme === 'dark' ? '🌙' : '☀️';
}

themeToggle.addEventListener('click', toggleTheme);
themeToggle.textContent = document.documentElement.dataset.theme === 'dark' ? '🌙' : '☀️';

// Render inicial
renderCartas(cartas);
renderPerfiles();
renderMatches();
