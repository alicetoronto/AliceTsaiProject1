const slideOutIcon = document.querySelector('.slideOutIcon');
const slideOutNav = document.querySelector('.slideOutNav');
const closeSlideOut = document.querySelector('.closeSlideOut');

slideOutIcon.addEventListener('click', function() {
    slideOutNav.style.right = '0';
});

closeSlideOut.addEventListener('click', function() {
    slideOutNav.style.right = '-75vw';
});