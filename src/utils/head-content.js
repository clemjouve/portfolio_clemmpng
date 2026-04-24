(function () {
  const faviconPath = '../bsrc/assets/icons/favicon.svg';

  function ensureHeadContent() {
    if (!document.head) return;

    // --- Gestion des Polices ---
    const fonts = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=SN+Pro:ital,wght@0,200..900;1,200..900&display=swap' }
    ];

    fonts.forEach(spec => {
      const selector = `link[rel='${spec.rel}'][href='${spec.href}']`;
      if (!document.head.querySelector(selector)) {
        const link = document.createElement('link');
        Object.entries(spec).forEach(([key, value]) => link.setAttribute(key, value));
        document.head.appendChild(link);
      }
    });

    const rels = ['icon', 'apple-touch-icon'];
    
    rels.forEach(relType => {
      let link = document.querySelector(`link[rel="${relType}"]`);
      
      if (!link) {
        link = document.createElement('link');
        link.rel = relType;
        document.head.appendChild(link);
      }
      
      link.type = 'image/svg+xml';
      link.href = faviconPath;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureHeadContent);
  } else {
    ensureHeadContent();
  }
})();

const script = document.createElement('script');
script.src = 'src/utils/body-content.js';
script.type = 'text/javascript';
document.head.appendChild(script);