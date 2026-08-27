const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-list');

function abrirFecharMenu(forcarFechado = false) {
  const isOpen = forcarFechado ? false : menu.classList.toggle('open');
  if (forcarFechado) menu.classList.remove('open');
  btn.setAttribute('aria-expanded', isOpen);
}

btn.addEventListener('click', () => abrirFecharMenu());

// Fecha ao clicar fora do menu
document.addEventListener('click', (e) => {
  const cliqueForaDoMenu = !menu.contains(e.target) && !btn.contains(e.target);
  if (cliqueForaDoMenu && menu.classList.contains('open')) {
    abrirFecharMenu(true);
  }
});

// Fecha com a tecla Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('open')) {
    abrirFecharMenu(true);
    btn.focus();
  }
});