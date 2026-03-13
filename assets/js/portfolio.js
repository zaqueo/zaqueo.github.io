// Correo ofuscado — los bots no pueden leerlo en el HTML
(function() {
    var u = 'zaqueo';
    var d = 'io.gt';
    var link = document.getElementById('email-link');
    if (link) {
        link.href = 'mailto:' + u + '@' + d;
    }
})();

// Inicializar animaciones AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Efecto scroll en navegación
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('py-2', 'shadow-xl');
        nav.classList.remove('py-4');
    } else {
        nav.classList.remove('py-2', 'shadow-xl');
        nav.classList.add('py-4');
    }
});
