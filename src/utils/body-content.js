// On cible uniquement les balises <img>
document.querySelectorAll('img').forEach(image => {
    image.addEventListener('contextmenu', e => e.preventDefault());
});