(function () {
  const faviconPath = '../src/assets/icons/clemjouve.svg'; // chemin côté serveur (absolu)

  function ensureHeadContent() {
    if (!document.head) return;

    // fonts preconnect links
    const fonts = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=SN+Pro:ital,wght@0,200..900;1,200..900&display=swap' }
    ];

    fonts.forEach(spec => {
      // avoid duplicate
      const selector = `link[rel='${spec.rel}'][href='${spec.href}']` + (spec.crossorigin ? `[crossorigin]` : '');
      if (!document.head.querySelector(selector)) {
        const link = document.createElement('link');
        Object.keys(spec).forEach(k => link.setAttribute(k, spec[k]));
        document.head.appendChild(link);
      }
    });

    // favicon handling
    // Primary icon
    let icon = document.querySelector("link[rel~='icon']");
    if (!icon) {
      icon = document.createElement('link');
      icon.rel = 'icon';
      document.head.insertBefore(icon, document.head.firstChild || null);
    }
    icon.type = 'image/png';
    icon.href = faviconPath;

    // Add/update legacy shortcut icon for some browsers
    let shortcut = document.querySelector("link[rel='shortcut icon']");
    if (!shortcut) {
      shortcut = document.createElement('link');
      shortcut.rel = 'shortcut icon';
      document.head.insertBefore(shortcut, document.head.firstChild || null);
    }
    shortcut.type = 'image/png';
    shortcut.href = faviconPath;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureHeadContent);
  } else {
    ensureHeadContent();
  }
})();
