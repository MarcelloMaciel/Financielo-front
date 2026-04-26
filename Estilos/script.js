/**
 * script.js — Financielo
 * Funcionalidades:
 *   1. Navbar: muda aparência ao rolar a página
 *   2. Menu hambúrguer (mobile)
 *   3. Modal: abrir / fechar para adicionar transação
 *   4. Lógica para adicionar nova transação na lista do mockup
 *   5. Animação de entrada dos cards via IntersectionObserver
 */

/* ============================================================
   1. NAVBAR — efeito de scroll
   ============================================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  // Adiciona classe "scrolled" quando rolar mais de 40px
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ============================================================
   2. MENU HAMBÚRGUER (mobile)
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  // Alterna a classe "open" para mostrar/ocultar o menu
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});


/* ============================================================
   3. MODAL — abrir e fechar
   ============================================================ */
const modalOverlay  = document.getElementById('modalOverlay');
const btnAddTrans   = document.getElementById('btnAddTrans');
const modalClose    = document.getElementById('modalClose');

/** Abre o modal */
function openModal() {
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Trava o scroll do fundo
}

/** Fecha o modal e limpa os campos */
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  clearModalFields();
}

/** Limpa os inputs do modal */
function clearModalFields() {
  document.getElementById('transName').value  = '';
  document.getElementById('transValue').value = '';
  document.getElementById('transType').value  = 'negative';
  document.getElementById('transIcon').value  = '💳';
}

// Evento: botão "+ Adicionar" no mockup do celular
btnAddTrans.addEventListener('click', openModal);

// Evento: botão de fechar (✕)
modalClose.addEventListener('click', closeModal);

// Evento: clique no overlay (fora do modal) fecha
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Evento: tecla ESC fecha o modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});


/* ============================================================
   4. ADICIONAR TRANSAÇÃO na lista do mockup
   ============================================================ */
const btnConfirmTrans = document.getElementById('btnConfirmTrans');
const transList       = document.getElementById('transList');
const balanceValue    = document.getElementById('balanceValue');

/**
 * Converte uma string "R$ 1.250,00" para número 1250.00
 * @param {string} str
 * @returns {number}
 */
function parseBRL(str) {
  return parseFloat(str.replace('R$', '').replace(/\./g, '').replace(',', '.').trim());
}

/**
 * Formata um número para o padrão "R$ 1.250,00"
 * @param {number} value
 * @returns {string}
 */
function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

btnConfirmTrans.addEventListener('click', () => {
  const name  = document.getElementById('transName').value.trim();
  const value = parseFloat(document.getElementById('transValue').value);
  const type  = document.getElementById('transType').value;   // "negative" ou "positive"
  const icon  = document.getElementById('transIcon').value;

  // Validação básica
  if (!name) {
    alert('Por favor, preencha a descrição da transação.');
    return;
  }
  if (isNaN(value) || value <= 0) {
    alert('Por favor, insira um valor válido maior que zero.');
    return;
  }

  // Cria o elemento <li> com a nova transação
  const li = document.createElement('li');
  li.classList.add('trans-item');
  li.innerHTML = `
    <span class="trans-icon">${icon}</span>
    <span class="trans-name">${escapeHTML(name)}</span>
    <span class="trans-val ${type}">
      ${type === 'negative' ? '-' : '+'} ${formatBRL(value)}
    </span>
  `;

  // Insere no topo da lista
  transList.prepend(li);

  // Atualiza o saldo exibido no mockup
  let currentBalance = parseBRL(balanceValue.textContent);
  currentBalance += type === 'positive' ? value : -value;
  balanceValue.textContent = formatBRL(currentBalance);

  // Fecha o modal após adicionar
  closeModal();
});

/**
 * Escapa caracteres HTML para evitar XSS nos inputs do usuário
 * @param {string} str
 * @returns {string}
 */
function escapeHTML(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


/* ============================================================
   5. ANIMAÇÕES DE ENTRADA — IntersectionObserver
   ============================================================ */

/**
 * Adiciona a classe "visible" quando o elemento entra no viewport,
 * acionando a transição CSS de fade-in + slide-up.
 */
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Anima apenas uma vez
    }
  });
}, observerOptions);

// Seleciona os elementos que receberão animação
const animatables = document.querySelectorAll(
  '.feat-card, .price-card, .testi-card, .section-title, .section-label'
);

animatables.forEach((el, i) => {
  // Estilo inicial (escondido ligeiramente para baixo)
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity .5s ease ${i * 0.07}s, transform .5s ease ${i * 0.07}s`;

  observer.observe(el);
});

// Estilo final injetado quando "visible" é adicionado
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  </style>
`);
