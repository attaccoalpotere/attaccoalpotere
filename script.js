document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form[name="problem-report"]');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene l'invio predefinito per validazione

        // Ottieni il campo del messaggio
        const message = document.querySelector('#message');

        // Semplice validazione del campo
        if (validateForm(message)) {
            // Mostra un messaggio di successo all'utente
            showSuccessMessage();

            // Procedi con l'invio del modulo
            this.submit(); // Netlify gestirà l'invio anonimo
        }
    });

    // Funzione di validazione del modulo
    function validateForm(message) {
        // Controlla che il campo della descrizione sia compilato
        if (!message.value) {
            alert('Il campo della problematica è obbligatorio.');
            return false;
        }

        return true; // Tutto va bene
    }

    // Funzione per mostrare il messaggio di successo
    function showSuccessMessage() {
        const formSection = document.getElementById('form-section');
        formSection.innerHTML = `
            <div class="success-message">
                <h2>Grazie per la tua segnalazione anonima!</h2>
                <p>La tua segnalazione è stata ricevuta e sarà analizzata.</p>
            </div>
        `;
    }
});
