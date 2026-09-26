/* ==========================================================
   HUB-SE | Layout Global (Navbar & Footer)
   Importado em todas as páginas:
   <div id="site-navbar" data-pagina="inicio|sobre|projetos|equipe|contato"></div>
   ...
   <div id="site-footer"></div>
   <script src="../components/layout.js"></script>
========================================================== */
(function () {
  // Descobre a raiz relativa dinamicamente a partir do caminho do script
  const scriptSrc = document.currentScript ? document.currentScript.src : '';
  const raiz = scriptSrc.replace(/components\/layout\.js.*$/, '');

  const linksMenu = [
    { id: 'inicio',   texto: 'Início',   href: 'index/index.html' },
    { id: 'sobre',    texto: 'Sobre',    href: 'sobre/sobre.html' },
    { id: 'projetos', texto: 'Projetos', href: 'projetos/projetos.html' },
    { id: 'equipe',   texto: 'Equipe',   href: 'equipes/equipe.html' },
  ];

  // Injeção da Navbar
  const navContainer = document.getElementById('site-navbar');
  if (navContainer) {
    const paginaAtiva = navContainer.dataset.pagina || '';
    const linksHTML = linksMenu
      .map(item => `
        <a href="${raiz}${item.href}" class="${item.id === paginaAtiva ? 'active' : ''}">
          ${item.texto}
        </a>
      `).join('');

    navContainer.outerHTML = `
      <header class="navbar">
        <a class="logo" href="${raiz}index/index.html">
          <img 
            src="${raiz}assets/logos/logoempe.png" 
            alt="HUB-SE" 
            class="empe-logo" 
            style="max-height: 90px; width: auto; object-fit: contain; display: block;"
          >
        </a>
        <nav class="nav-links">${linksHTML}</nav>
        <a class="btn-contato${paginaAtiva === 'contato' ? ' ativo' : ''}" href="${raiz}contato/contato.html">
          Contato
        </a>
      </header>
    `;
  }

  // Injeção do Footer
  const footerContainer = document.getElementById('site-footer');
  if (footerContainer) {
    const anoAtual = new Date().getFullYear();
    footerContainer.outerHTML = `
      <footer class="footer">
        <div class="footer-overlay"></div>
        <div class="footer-content">
          <p>© ${anoAtual} HUB-SE — Todos os direitos reservados.</p>
        </div>
      </footer>
    `;
  }
})();
