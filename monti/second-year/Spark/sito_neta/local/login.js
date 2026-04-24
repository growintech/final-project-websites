// Funzioni per mostrare/nascondere l'overlay di login
function apriLogin() {
    document.getElementById('login-overlay').classList.add('active');
    document.body.style.overflow = 'hidden'; // Impedisce lo scroll della pagina sotto
}

function chiudiLogin() {
    document.getElementById('login-overlay').classList.remove('active');
    document.body.style.overflow = 'auto'; // Ripristina lo scroll
}

 // Funzione per gestire il click sul pulsante senza ricaricare la pagina
        function gestisciAccesso(event) {
            // Previene il comportamento di default del form (il refresh della pagina)
            event.preventDefault(); 
            
            // Recupera il nome inserito dall'utente per personalizzare il messaggio
            const nomeInserito = document.getElementById('nome').value;
            
            // Mostra l'alert richiesto
            alert("Operazione completata con successo!\nBenvenuto in Spark, " + nomeInserito + ".");
            
            // Opzionale: svuota i campi del form dopo l'ok sull'alert
            document.getElementById('form-accesso').reset();
            
            // Chiude automaticamente l'overlay dopo l'accesso
            chiudiLogin();
        }