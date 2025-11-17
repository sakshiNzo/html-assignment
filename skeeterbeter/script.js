const images = document.querySelectorAll(".hover-img");

// Move effect on mouse move
document.body.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    const rotateX = y * 50;
    const rotateY = -x * 50;

    images.forEach(img => {
        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
});

// Reset when mouse leaves
document.body.addEventListener("mouseleave", () => {
    images.forEach(img => {
        img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
});



//hamberg icon on small screens
const hamberg = document.querySelector('.bars')
const menu = document.querySelector('.menus')
const body = document.body

hamberg.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll')

});

//header is fixed on scroll 300 jquery//

var $ = jQuery.bind({});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $("header").addClass("hdactive");
    } else {
        $("header").removeClass("hdactive");
    }
});


//animation on scroll the elementt is faded also in it used the browser api InstersectionObserver
const elements = document.querySelectorAll('.scroll-animation.fade-left');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {

            entry.target.classList.remove('is-visible');
        }
    });
}, { threshold: 0.5 });

elements.forEach(element => {
    observer.observe(element);
});


const rightFade = document.querySelectorAll(".scroll-animation.fade-right")

const observerRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('isright-visible');
        } else {

            entry.target.classList.remove('isright-visible');
        }
    });
}, { threshold: 0.5 });

rightFade.forEach(element => {
    observerRight.observe(element);
});