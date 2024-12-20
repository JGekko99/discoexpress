// Imposta l'anno corrente nel footer e gestisci il banner dei cookie
document.addEventListener('DOMContentLoaded', function() {
    // Aggiorna l'anno corrente nel footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Logica per il banner dei cookie
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Controlla se i cookie sono già stati accettati
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (!cookiesAccepted) {
        // Mostra il banner se non sono stati accettati
        banner.classList.remove('hidden');
    }

    acceptBtn.addEventListener('click', function() {
        // L'utente ha accettato i cookie
        localStorage.setItem('cookiesAccepted', 'true');
        banner.classList.add('hidden');
    });
});
