// Blog post comments

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
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
    // clearing values from inputs after submission
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('[name=comment]').value = '';
});

// Blog 'See More' modal
const footer = document.querySelector('footer');
const aside = document.querySelector('aside');
const mediaQ = window.matchMedia('(max-width: 1020px)');
const outsideMediaQ = window.matchMedia('(max-width: 775px)');

if (mediaQ.matches && !outsideMediaQ.matches) {
    window.addEventListener('scroll', function() {
        if (footer.getBoundingClientRect().bottom <= 770) {
        console.log("scroll")
        aside.style.opacity = '100%';
        aside.style.top = '61%';
        aside.style.boxShadow = '0 0 0 5000px rgba(0, 0, 0, 0.5)';
        } else {
            aside.style.top = '100vh';
            aside.style.opacity = '0%';
            aside.style.boxShadow = 'none';
        }
    });
}

