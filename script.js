// Slide out menu
const menu = {};
menu.slideOutIcon = document.querySelector('.slideOutIcon');
menu.slideOutNav = document.querySelector('.slideOutNav');
menu.closeSlideOut = document.querySelector('.closeSlideOut');

menu.slideOutIcon.addEventListener('click', function () {
    menu.slideOutNav.style.right = '0';
});

menu.closeSlideOut.addEventListener('click', function () {
    menu.slideOutNav.style.right = '-75vw';
});

// Gallery image carousel. Credit to https://www.w3schools.com/howto/howto_js_slideshow.asp for the image carousel code
const imgCarousel = {};
imgCarousel.prev = document.querySelector('.prev');
imgCarousel.next = document.querySelector('.next');
imgCarousel.slideIndex = 1;

imgCarousel.init = function(){
    showSlides(imgCarousel.slideIndex);
    imgCarousel.prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    imgCarousel.next.addEventListener('click', function () {
        plusSlides(1);
    });
}

function plusSlides(n) {
    showSlides(imgCarousel.slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    if (n > slides.length) { imgCarousel.slideIndex = 1 }
    if (n < 1) { imgCarousel.slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[imgCarousel.slideIndex - 1].style.display = 'block';
}

if (document.querySelector('body').id === 'home'){
    imgCarousel.init();
};


// Blog post comments
const blogForm = {};
blogForm.form = document.querySelector('form');

blogForm.init = function(){
    blogForm.form.addEventListener('submit', function (e) {
        e.preventDefault();
        blogForm.displayNewComment();
        blogForm.clearInfo();
    });
};

blogForm.displayNewComment = function(){
    // storing user's name, email address, and comment in variables
    let commenterName = document.querySelector('#name').value;
    const commenterEmail = document.querySelector('#email').value;
    const commenterComment = document.querySelector('[name=comment]').value;

    // storing and formatting posting date in variables
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const postingDate = Intl.DateTimeFormat('en-US', options).format(new Date());
    const postingDateFormatted = postingDate.replace("y,", "y");

    // displaying comment to page
    const newComment = document.createElement('article');
    document.querySelector('.comments').appendChild(newComment);
    newComment.innerHTML = `
        <div class="imgContainer">
            <img src="https://place-puppy.com/300x300" alt="">
        </div>
        <div class="textContainer">
            <p class="date">${postingDateFormatted} by ${commenterName}</p>
            <p>${commenterComment}</p>
        </div>
    `;
};

blogForm.clearInfo = function(){
    // clearing values from inputs after submission
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('[name=comment]').value = '';
};

// Blog 'See More' modal
const blogModal = {};
blogModal.footer = document.querySelector('footer');
blogModal.aside = document.querySelector('aside');
blogModal.mediaQ = window.matchMedia('(max-width: 1020px)');
blogModal.outsideMediaQ = window.matchMedia('(max-width: 775px)');

blogModal.init = function(){
    if (blogModal.mediaQ.matches && !blogModal.outsideMediaQ.matches) {
        window.addEventListener('scroll', function () {
            if (blogModal.footer.getBoundingClientRect().bottom <= 770) {
                console.log("scroll")
                blogModal.aside.style.opacity = '100%';
                blogModal.aside.style.top = '61%';
                blogModal.aside.style.boxShadow = '0 0 0 5000px rgba(0, 0, 0, 0.5)';
            } else {
                blogModal.aside.style.top = '100vh';
                blogModal.aside.style.opacity = '0%';
                blogModal.aside.style.boxShadow = 'none';
            }
        });
    }
};

if (document.querySelector('body').id === 'blogPage') {
    blogForm.init();
    blogModal.init();
};