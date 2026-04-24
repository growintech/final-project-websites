// Gestione del menu su mobile
function toggleMenu() {
    let menu = document.querySelector(".nav-wrapper");
    menu.classList.toggle("aperto");
}

// Effetto scroll per l'header
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Logica per le animazioni di Fade-in allo scroll
document.addEventListener("DOMContentLoaded", function() {
    // Chiudi menu mobile al click sui link
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            document.querySelector(".nav-wrapper").classList.remove("aperto");
        });
    });

    // Selezioniamo tutti gli elementi che hanno la classe 'fade-in'
    const elementiDaAnimare = document.querySelectorAll('.fade-in');

    // Creiamo un observer che intercetta quando gli elementi entrano nello schermo
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se l'elemento è visibile nella finestra del browser...
            if (entry.isIntersecting) {
                // Aggiungiamo la classe che fa partire l'animazione CSS
                entry.target.classList.add('visibile');
                
                // Opzionale: smettiamo di osservarlo se vogliamo che l'animazione avvenga una sola volta
                observer.unobserve(entry.target);
            }
        });
    }, {
        // threshold: 0.1 significa che l'animazione parte quando almeno il 10% dell'elemento è visibile
        threshold: 0.1 
    });

    // Diciamo all'observer di tenere d'occhio ogni singolo elemento trovato
    elementiDaAnimare.forEach(elemento => {
        observer.observe(elemento);
    });
});