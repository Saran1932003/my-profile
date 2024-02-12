/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
function sendEmail(event) {
    event.preventDefault();

    // Collect form data
    let fullNameInput = document.querySelector('input[placeholder="Full Name"]');
    let emailInput = document.querySelector('input[placeholder="Email Address"]');
    let mobileNumberInput = document.querySelector('input[placeholder="Mobile Number"]');
    let subjectInput = document.querySelector('input[placeholder="Subject"]');
    let messageInput = document.querySelector('textarea[placeholder="Your Message"]');

    // Check if the input fields exist
    if (!fullNameInput || !emailInput || !mobileNumberInput || !subjectInput || !messageInput) {
        console.error("One or more input fields not found.");
        return;
    }

    // Extract values from input fields
    let from_name = fullNameInput.value;
    let from_email = emailInput.value;
    let from_mobileNumber = mobileNumberInput.value;
    let subject = subjectInput.value;
    let message = messageInput.value;

    let templateParams = {
        fullName: from_name,
        email: from_email,
        mobileNumber: from_mobileNumber,
        subject: subject,
        message: message
    };

    // Log the values for debugging
    console.log("Full Name:", from_name);
    console.log("Email:", from_email);
    console.log("Mobile Number:", from_mobileNumber);
    console.log("Subject:", subject);
    console.log("Message:", message);

    emailjs.send("service_z2aj5xt", "template_ef7pzi8", templateParams)
    .then(function(response) {
        console.log("Email sent successfully", response);
        // You can add further actions here (e.g., show a success message)
    }, function(error) {
        console.error("Error sending email", error);
        // You can add further actions here (e.g., show an error message)
    });
}



/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


