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
            "main-title": "The color of fresh quality",
            "main-paragraph": "At Vista Verde Produce, we take pride in delivering fresh, high-quality produce straight from our farms to your table. Our commitment to freshness is reflected in our slogan, 'The Color of Fresh Quality.'"
        },
        es: {
            "main-title": "El color de la frescura de calidad",
            "main-paragraph": "En Vista Verde Produce, nos enorgullece entregar productos frescos y de alta calidad directamente desde nuestras granjas hasta su mesa. Nuestro compromiso con la frescura se refleja en nuestro lema, 'El Color de la Frescura de Calidad.'"
        }
    };

    // Actualizamos los textos de la página según el idioma
    document.getElementById("main-title").textContent = texts[language]["main-title"];
    document.getElementById("main-paragraph").textContent = texts[language]["main-paragraph"];
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
