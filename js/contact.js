

// Función para establecer el idioma y la bandera seleccionada
function setLanguage(language) {
    localStorage.setItem("language", language); // Guardamos el idioma seleccionado
    updateFlagSelection(); // Actualizamos la bandera seleccionada
    updateTextContent(language); // Actualizamos el texto de la página según el idioma
}

// Función para actualizar la bandera seleccionada según el idioma en localStorage
function updateFlagSelection() {
    const language = localStorage.getItem("language"); // Obtenemos el idioma guardado
    const selectedFlagElement = document.getElementById('selected-flag');

    if (language === 'en') {
        selectedFlagElement.src = 'assets/usa-flag.png'; // Bandera de EE. UU.
    } else if (language === 'es') {
        selectedFlagElement.src = 'assets/mex-flag.png'; // Bandera de México
    }
}

// Función para actualizar los textos según el idioma
function updateTextContent(language) {
    const texts = {
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-contact": "Contact",
            "s1h1": "Get In Touch", 
            "s1p1": "Call Us: 123-456-789",
            "s1p2": "Email Us: vistaverdeproduce@gmail.com",
            "s1p3": "Our Offices:",
            "s1p4": "McAllen, TX, Guanajuato, MX",
            "s2h1": "Need Organic Foods! Send Us a Message",
            "s2p1": "Select Your Role",
            "s2p2": "Your Name",
            "s2p3": "Phone Number",
            "s2p4": "Address",
            "s2p5": "Email Address",
            "s2p6": "Subject",
            "s2p7": "Write a Message",
        },
        es: {
            "nav-home": "Inicio",
            "nav-about": "Acerca de",
            "nav-contact": "Contacto",
            "s1h1": "Póngase en contacto", 
            "s1p1": "Llámenos: 123-456-789",
            "s1p2": "Envíenos un correo: vistaverdeproduce@gmail.com",
            "s1p3": "Nuestras oficinas:",
            "s1p4": "McAllen, TX, Guanajuato, MX",
            "s2h1": "¿Necesitas productos orgánicos? Envíanos un mensaje",
            "s2p1": "Selecciona tu rol",
            "s2p2": "Tu nombre",
            "s2p3": "Número de teléfono",
            "s2p4": "Dirección",
            "s2p5": "Correo electrónico",
            "s2p6": "Asunto",
            "s2p7": "Escribe un mensaje",
        }
    };

    // Actualizamos los textos de la página según el idioma
    document.getElementById("nav-home").textContent = texts[language]["nav-home"];
    document.getElementById("nav-about").textContent = texts[language]["nav-about"];
    document.getElementById("nav-contact").textContent = texts[language]["nav-contact"];
    document.getElementById("s1h1").textContent = texts[language]["s1h1"];
    document.getElementById("s1p1").textContent = texts[language]["s1p1"];
    document.getElementById("s1p2").textContent = texts[language]["s1p2"];
    document.getElementById("s1p3").textContent = texts[language]["s1p3"];
    document.getElementById("s1p4").textContent = texts[language]["s1p4"];
    document.getElementById("s2h1").textContent = texts[language]["s2h1"];
    document.getElementById("s2p1").textContent = texts[language]["s2p1"];
    document.getElementById("s2p2").textContent = texts[language]["s2p2"];
    document.getElementById("s2p3").textContent = texts[language]["s2p3"];
    document.getElementById("s2p4").textContent = texts[language]["s2p4"];
    document.getElementById("s2p5").textContent = texts[language]["s2p5"];
    document.getElementById("s2p6").textContent = texts[language]["s2p6"];
    document.getElementById("s2p7").textContent = texts[language]["s2p7"];
}

// Función para manejar el evento de selección de idioma
document.addEventListener("DOMContentLoaded", function() {
    // Si no hay idioma guardado en localStorage, por defecto será inglés
    if (!localStorage.getItem("language")) {
        setLanguage('en'); // Establecer idioma predeterminado a inglés
    } else {
        const language = localStorage.getItem("language");
        updateFlagSelection();
        updateTextContent(language);
    }

    // Agregamos los manejadores de eventos para las banderas
    document.getElementById("usa-language").addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el desplazamiento de la página
        setLanguage('en'); // Establecer idioma inglés
    });
    document.getElementById("mexico-language").addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el desplazamiento de la página
        setLanguage('es'); // Establecer idioma español
    });
});

