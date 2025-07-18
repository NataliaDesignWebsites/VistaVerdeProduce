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
            "s1h1": "About Us", 
            "s1p1": "Welcome to Vista Verde Produce, where we pride ourselves on providing the freshest and highest-quality produce to our customers. Our main products include broccoli, bell peppers, and lettuces, all of which are grown with care and attention to detail.",
            "s1p2": "We believe that the color of fresh quality is green, and we strive to bring that vibrant color to your plate with every product we offer.",
            "s2h1": "Mision",
            "s2p1": "Our mission is clear: to provide customers with the freshest, highest-quality produce while upholding honesty, integrity, and transparency in all our business dealings. We believe everyone deserves access to healthy, delicious food, and we're committed to making that a reality.",
            "s3h1": "Vision",
            "s3p1": "Our vision is focused on growth, innovation, and accessibility. We envision a world where fresh, high-quality produce is available to all, driven by cutting-edge technology and sustainable practices. But our vision is also about creating a better world for future generations, inspiring positive change.",
            "s4h1": "Values",
            "s4p1": "Sustainability and responsible farming practices are at our core values. We work closely with growers to ensure environmentally-friendly methods, minimizing our impact on the planet.",
            "s4p2": "Choosing Vista Verde Produce means supporting a company that cares about customers and the environment."
        },
        es: {
            "nav-home": "Inicio",
            "nav-about": "Acerca de",
            "nav-contact": "Contacto",
            "s1h1": "Acerca de Nosotros", 
            "s1p1": "Bienvenidos a Vista Verde Produce, donde nos enorgullece ofrecer los productos más frescos y de mayor calidad a nuestros clientes. Nuestros productos principales incluyen brócoli, pimientos morrones y lechugas, todos cultivados con esmero y atención al detalle.",
            "s1p2": "Creemos que el color de la frescura de calidad es verde, y nos esforzamos por llevar ese color vibrante a su plato con cada producto que ofrecemos.",
            "s2h1": "Misión",
            "s2p1": "Nuestra misión es clara: proporcionar a los clientes los productos más frescos y de la más alta calidad, manteniendo la honestidad, la integridad y la transparencia en todas nuestras transacciones comerciales. Creemos que todos merecen acceso a alimentos saludables y deliciosos, y estamos comprometidos a hacer de eso una realidad.",
            "s3h1": "Visión",
            "s3p1": "Nuestra visión está centrada en el crecimiento, la innovación y la accesibilidad. Imaginamos un mundo donde los productos frescos y de alta calidad estén disponibles para todos, impulsados por tecnologías de vanguardia y prácticas sostenibles. Pero nuestra visión también es crear un mundo mejor para las generaciones futuras, inspirando un cambio positivo.",
            "s4h1": "Valores",
            "s4p1": "La sostenibilidad y las prácticas agrícolas responsables son nuestros valores fundamentales. Trabajamos estrechamente con los productores para garantizar métodos respetuosos con el medio ambiente, minimizando nuestro impacto en el planeta.",
            "s4p2": "Elegir Vista Verde Produce significa apoyar a una empresa que se preocupa por los clientes y el medio ambiente."
        }
    };

    // Actualizamos los textos de la página según el idioma
    document.getElementById("nav-home").textContent = texts[language]["nav-home"];
    document.getElementById("nav-about").textContent = texts[language]["nav-about"];
    document.getElementById("nav-contact").textContent = texts[language]["nav-contact"];
    document.getElementById("s1h1").textContent = texts[language]["s1h1"];
    document.getElementById("s1p1").textContent = texts[language]["s1p1"];
    document.getElementById("s1p2").textContent = texts[language]["s1p2"];
    document.getElementById("s2h1").textContent = texts[language]["s2h1"];
    document.getElementById("s2p1").textContent = texts[language]["s2p1"];
    document.getElementById("s3h1").textContent = texts[language]["s3h1"];
    document.getElementById("s3p1").textContent = texts[language]["s3p1"];
    document.getElementById("s4h1").textContent = texts[language]["s4h1"];
    document.getElementById("s4p1").textContent = texts[language]["s4p1"];
    document.getElementById("s4p2").textContent = texts[language]["s4p2"];
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


