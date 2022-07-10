// Gallery image carousel
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let slideIndex = 1;
showSlides(slideIndex);

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function () {
    plusSlides(1);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = 'block';
    // dots[slideIndex - 1].className += " active";
}