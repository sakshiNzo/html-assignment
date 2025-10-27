$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items: 2,
        navigation: true,
        dots: true
    });

});


particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 5, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } } }
    },
    retina_detect: true
});



function faq(icon) {
    console.log("hii the button is clicked")
    const question = icon.closest('.questions');


    document.querySelectorAll('.questions').forEach(q => {
        if (q !== question) q.classList.remove('active');
    });


    question.classList.toggle('active');


}