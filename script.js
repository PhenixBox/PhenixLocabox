// Page 1: Enregistrement des informations dans localStorage
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi par défaut du formulaire

    // Récupération des informations du formulaire
    const clientData = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        email: document.getElementById('email').value,
        numero_voie: document.getElementById('numero_voie').value,
        nom_voie: document.getElementById('nom_voie').value,
        code_postal: document.getElementById('code_postal').value,
        ville: document.getElementById('ville').value,
        taille: document.getElementById('taille').value
    };

    // Stockage dans localStorage
    localStorage.setItem('clientData', JSON.stringify(clientData));

    // Redirection vers la page récapitulative
    window.location.href = 'recap.html';
});


// Page 2: Affichage des informations et gestion du bouton de validation
document.addEventListener('DOMContentLoaded', function() {
    const clientData = JSON.parse(localStorage.getItem('clientData'));

    // Vérifier si les données existent dans le localStorage
    if (clientData) {
        // Affichage du récapitulatif
        document.getElementById('box-loue').textContent = `Box choisi : ${clientData.taille}m²`;
        document.getElementById('tarif').textContent = `Tarif par mois : ${clientData.taille === '15' ? '90€' : '120€'}`;

        // Activation du bouton de validation si la case CGV/CGU est cochée
        document.getElementById('cgv-cgu').addEventListener('change', function() {
            document.getElementById('valider').disabled = !this.checked;
        });
    } else {
        // Si aucune donnée n'est trouvée, rediriger vers la page 1
        window.location.href = 'index.html';
    }
});
