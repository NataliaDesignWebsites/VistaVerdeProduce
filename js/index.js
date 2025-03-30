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