(function () {
  // CONSEIL : Utilisez un chemin absolu par rapport à la racine de votre serveur
  // Si votre favicon est dans public/assets/icons/favicon.png, utilisez '/assets/icons/favicon.png'
  const faviconPath = '/assets/icons/favicon.png'; 

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

    // --- Gestion de la Favicon ---
    // On regroupe les types de rel pour mettre à jour tous les éléments d'icône existants
    const rels = ['icon', 'shortcut icon'];
    
    rels.forEach(relType => {
      let link = document.querySelector(`link[rel*='${relType}']`);
      
      if (!link) {
        link = document.createElement('link');
        link.rel = relType;
        document.head.appendChild(link);
      }
      
      link.type = 'image/png';
      // Ajout d'un paramètre de version pour forcer le rafraîchissement du cache (optionnel)
      link.href = faviconPath + '?v=' + Date.now(); 
    });
  }

  // Exécution immédiate si possible, sinon au chargement du DOM
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