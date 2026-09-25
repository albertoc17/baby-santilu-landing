const stages = [
  {
    kicker: 'Primeros descubrimientos',
    title: 'Un mundo nuevo para mirar y sentir',
    copy: 'Contrastes, sonidos suaves y texturas invitan a enfocar la mirada, mover el cuerpo y reconocer el entorno.',
    milestones: ['Vista y seguimiento', 'Exploración sensorial', 'Tummy time'],
    symbol: '◉',
    color: '#ffe1e7',
    blob: '#ff8fa3'
  },
  {
    kicker: 'Manos curiosas',
    title: 'Todo se toca, se gira y se descubre',
    copy: 'Objetos fáciles de tomar y experiencias de causa y efecto acompañan el gateo, la coordinación y los primeros desafíos.',
    milestones: ['Agarre y coordinación', 'Causa y efecto', 'Gateo y movimiento'],
    symbol: '↻',
    color: '#dff5ed',
    blob: '#60cbc3'
  },
  {
    kicker: 'Pequeñas conquistas',
    title: 'Moverse con confianza y resolver jugando',
    copy: 'Encajar, apilar, arrastrar e imitar fortalece la autonomía y convierte cada intento en una nueva conquista.',
    milestones: ['Equilibrio', 'Motricidad fina', 'Lenguaje temprano'],
    symbol: '△',
    color: '#fff0bd',
    blob: '#ffc857'
  },
  {
    kicker: 'La imaginación despega',
    title: 'Historias, preguntas y juego sin límites',
    copy: 'El juego simbólico, los desafíos y la creatividad ayudan a expresar ideas, practicar habilidades y comprender el mundo.',
    milestones: ['Juego simbólico', 'Creatividad', 'Resolución de problemas'],
    symbol: '✦',
    color: '#dceffc',
    blob: '#77bfe0'
  }
];

const stageResult = document.querySelector('#stage-result');
const tabs = document.querySelectorAll('.stage-tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const stage = stages[Number(tab.dataset.stage)];
    tabs.forEach((item) => {
      item.classList.toggle('active', item === tab);
      item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
    });
    stageResult.classList.add('changing');
    window.setTimeout(() => {
      document.querySelector('#stage-kicker').textContent = stage.kicker;
      document.querySelector('#stage-title').textContent = stage.title;
      document.querySelector('#stage-copy').textContent = stage.copy;
      document.querySelector('#stage-symbol').textContent = stage.symbol;
      document.querySelector('.stage-art').style.background = stage.color;
      document.querySelector('.stage-symbol').style.background = stage.blob;
      document.querySelector('#stage-milestones').innerHTML = stage.milestones.map((item) => `<span>${item}</span>`).join('');
      stageResult.classList.remove('changing');
    }, 180);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

window.addEventListener('scroll', () => {
  document.querySelector('.site-header').classList.toggle('scrolled', window.scrollY > 15);
}, { passive: true });

const toast = document.querySelector('.toast');
document.querySelector('.soon-button').addEventListener('click', () => {
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2800);
});

document.querySelector('#year').textContent = new Date().getFullYear();
