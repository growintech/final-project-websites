// Gestione del menu su mobile
function toggleMenu() {
    let menu = document.querySelector(".nav-wrapper");
    // Assicurati che il menu esista prima di manipolarlo
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

// Funzione Cambio Illuminazione (Giorno/Notte)
function toggleDarkMode() {
    const body = document.body;
    const icon = document.querySelector("#theme-toggle i");
    const text = document.querySelector("#theme-toggle span");
    
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
        text.innerText = "Giorno";
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
        text.innerText = "Notte";
        localStorage.setItem("theme", "light");
    }
}

// Logica per le animazioni di Fade-in allo scroll
document.addEventListener("DOMContentLoaded", function() {
    // Controllo preferenza salvata
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        const icon = document.querySelector("#theme-toggle i");
        const text = document.querySelector("#theme-toggle span");
        if(icon) icon.classList.replace("fa-moon", "fa-sun");
        if(text) text.innerText = "Giorno";
    }

    // Chiudi menu mobile al click sui link
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Se il link è un anchor sulla stessa pagina, preveniamo il default per lo smooth scroll
            // if (link.hash && link.pathname === window.location.pathname) event.preventDefault();
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