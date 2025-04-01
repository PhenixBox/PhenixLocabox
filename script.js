// Page 1: Enregistrement des informations dans localStorage
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

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

    localStorage.setItem('clientData', JSON.stringify(clientData));
    window.location.href = 'recap.html';
});

// Page 2: Récapitulatif des informations
document.addEventListener('DOMContentLoaded', function() {
    const clientData = JSON.parse(localStorage.getItem('clientData'));

    if (clientData) {
        document.getElementById('box-loue').textContent = `Box choisi : ${clientData.taille}m²`;
        document.getElementById('tarif').textContent = `Tarif par mois : ${clientData.taille === '15' ? '90€' : '120€'}`;

        document.getElementById('cgv-cgu').addEventListener('change', function() {
            document.getElementById('valider').disabled = !this.checked;
        });
    }
});
