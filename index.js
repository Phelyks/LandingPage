// get the button and form elements

const showFormBtn = document.getElementById("show-form");
const contactForm = document.getElementById("contact-form");


// add event listeners to the button toggle the form visibility;

showFormBtn.addEventListener
    ('click', () => {
        if (contactForm.style.display === 'none'){
            contactForm.style.display = 'block';
        } else {
            contactForm.style.display = 'none';
        }
    });