// Script pour la barre de recherche
document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.placeholder');
    const resultContainer = document.querySelector('.result-container');

    // Masquer les résultats au départ
    resultContainer.style.display = 'none';

    // Écouter l'événement keypress sur l'input
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && input.value.trim() !== '') {
            // Créer un nouveau résultat
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';

            const textDiv = document.createElement('div');
            textDiv.className = 'text';
            textDiv.textContent = input.value.trim();

            const img = document.createElement('img');
            img.className = 'icon-px';
            img.src = '../../assets/icons/x.svg';
            img.style.filter = 'invert(1)';

            resultDiv.appendChild(textDiv);
            resultDiv.appendChild(img);

            resultContainer.appendChild(resultDiv);
            resultContainer.style.display = 'flex';
            
            // Effacer le texte de l'input
            input.value = '';
        }
    });
});