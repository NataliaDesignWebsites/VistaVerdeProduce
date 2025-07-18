$(document).ready(function() {
    // Inicialmente el título está oculto
    $('.animated-title').css('opacity', 0);

    // Detecta cuando el scroll pasa por el elemento
    $(window).on('scroll', function() {
        // Verifica si el título está en el área visible del viewport
        var scrollPos = $(window).scrollTop();  // Posición actual del scroll
        var elementPos = $('.animated-title').offset().top;  // Posición del título

        // Si el título está en la vista
        if (scrollPos + $(window).height() > elementPos) {
            // Si no está visible ya, hazlo aparecer
            if ($('.animated-title').css('opacity') == 0) {
                $('.animated-title').fadeTo(2000, 1); // Desvanecer a opacidad 1 durante 2 segundos
            }
        }
    });
});

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
            "main-title": "The color of fresh quality",
            "main-paragraph": "Fresh and high quality products",
            "s1h1": "The color of fresh quality", 
            "s1p1": "At Vista Verde Produce, we take pride in delivering fresh, high-quality produce straight from our farms to your table. Our commitment to freshness is reflected in our slogan, 'The Color of Fresh Quality.'",
            "s1h2": "When you think of fresh produce, what comes to mind?",
            "s1p2": "Bright, vibrant colors that pop with flavor and nutrients. That's exactly what we deliver at Vista Verde Produce.",
            "s1h3": "Our broccoli is a deep shade of green",
            "s1p3": "Our bell peppers are a rainbow of reds, yellows, and greens, and our lettuces are a crisp and refreshing shade of emerald. These colors aren't just for show - they're a sign of the quality and freshness you can expect from our products.",
            "s2h1": "Why Choose Vista Verde Produce?",
            "s2p1": "We are dedicated to providing the highest quality produce to our customers. Our commitment to sustainability and ethical business practices sets us apart from other companies in the industry.",
            "s2h2": "Why Choose Vista Verde Produce?",
            "s2p2": "With a focus on innovation and customer satisfaction, we offer solutions for all your business needs. From our expert logistics to our experienced team, you can trust that we will deliver the best possible products and services.",
            "s3h1": "Locations",
            "s3p1": "We are proudly based in both Irapuato, Guanajuato and McAllen, Texas, offering our wide range of vegetable export services to meet your needs. No matter where you are, we’re here to deliver fresh, quality produce right to your doorstep.",
            "s4h1": "Our Partners"
        },
        es: {
            "nav-home": "Inicio",
            "nav-about": "Acerca de",
            "nav-contact": "Contacto",
            "main-title": "El color de la frescura de calidad",
            "main-paragraph": "Productos frescos y de alta calidad",
            "s1h1": "El color de la frescura de calidad", 
            "s1p1": "En Vista Verde Produce, nos enorgullece entregar productos frescos y de alta calidad directamente desde nuestras granjas hasta su mesa. Nuestro compromiso con la frescura se refleja en nuestro lema, 'El Color de la Frescura de Calidad.'",
            "s1h2": "Cuando piensas en productos frescos, ¿qué se te viene a la mente?",
            "s1p2": "Colores brillantes y vibrantes que resplandecen con sabor y nutrientes. Eso es exactamente lo que ofrecemos en Vista Verde Produce.",
            "s1h3": "Nuestro brócoli tiene un tono verde profundo",
            "s1p3": "Nuestros pimientos morrones son un arco iris de rojos, amarillos y verdes, y nuestras lechugas tienen un tono refrescante de esmeralda. Estos colores no son solo decorativos, son una señal de la calidad y frescura que puedes esperar de nuestros productos.",
            "s2h1": "¿Por qué elegir Vista Verde Produce?",
            "s2p1": "Nos dedicamos a proporcionar productos de la más alta calidad a nuestros clientes. Nuestro compromiso con la sostenibilidad y las prácticas comerciales éticas nos distingue de otras empresas en la industria.",
            "s2h2": "¿Por qué elegir Vista Verde Produce?",
            "s2p2": "Con un enfoque en la innovación y la satisfacción del cliente, ofrecemos soluciones para todas tus necesidades comerciales. Desde nuestra logística experta hasta nuestro equipo experimentado, puedes confiar en que entregaremos los mejores productos y servicios posibles.",
            "s3h1": "Ubicaciones",
            "s3p1": "Estamos orgullosamente ubicados en Irapuato, Guanajuato y McAllen, Texas, ofreciendo nuestra amplia gama de servicios de exportación de vegetales para satisfacer tus necesidades. No importa dónde estés, estamos aquí para entregar productos frescos y de calidad directamente a tu puerta.",
            "s4h1": "Nuestros Socios"
        }
    };

    // Actualizamos los textos de la página según el idioma
    document.getElementById("nav-home").textContent = texts[language]["nav-home"];
    document.getElementById("nav-about").textContent = texts[language]["nav-about"];
    document.getElementById("nav-contact").textContent = texts[language]["nav-contact"];

    document.getElementById("main-title").textContent = texts[language]["main-title"];
    document.getElementById("main-paragraph").textContent = texts[language]["main-paragraph"];
    document.getElementById("s1h1").textContent = texts[language]["s1h1"];
    document.getElementById("s1p1").textContent = texts[language]["s1p1"];
    document.getElementById("s1h2").textContent = texts[language]["s1h2"];
    document.getElementById("s1p2").textContent = texts[language]["s1p2"];
    document.getElementById("s1h3").textContent = texts[language]["s1h3"];
    document.getElementById("s1p3").textContent = texts[language]["s1p3"];
    document.getElementById("s2h1").textContent = texts[language]["s2h1"];
    document.getElementById("s2p1").textContent = texts[language]["s2p1"];
    document.getElementById("s2h2").textContent = texts[language]["s2h2"];
    document.getElementById("s2p2").textContent = texts[language]["s2p2"];
    document.getElementById("s3h1").textContent = texts[language]["s3h1"];
    document.getElementById("s3p1").textContent = texts[language]["s3p1"];
    document.getElementById("s4h1").textContent = texts[language]["s4h1"];
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


