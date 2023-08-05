// Menu Dropdown Toggle


/* primary-navigation-toggle idea 1 */

// // Get references to the button and the navbar
// const toggleButton = document.querySelector('.primary-navigation-toggle');
// const navbar = document.querySelector('#primary-navigation');
// const menuIcon = document.querySelector('.primary-navigation-toggle #icon');

// // Add event listener to the button
// toggleButton.addEventListener('click', () => {
//     // Toggle the icon classes
//     menuIcon.classList.toggle('icon-open');
//     menuIcon.classList.toggle('icon-close');
//     navbar.classList.toggle('active');

//     // Toggle the 'aria-expanded' attribute on the button
//     const expanded = toggleButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
//     toggleButton.setAttribute('aria-expanded', expanded);

//     // Toggle the 'aria-hidden' attribute on the navbar
//     const hidden = navbar.getAttribute('aria-hidden') === 'true' ? 'false' : 'true';
//     navbar.setAttribute('aria-hidden', hidden);
// });



/* primary-navigation-toggle idea 1  end*/




/* primary-navigation-toggle idea 2 */

// Menu Dropdown Toggle
const toggleButton = document.querySelector('.primary-navigation-toggle');
const navbar = document.querySelector('.primary-navigation');
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');
        const headerNav = document.querySelector('.primary-navigation');
        console.log(headerNav.style.display)
        if (headerNav.style.display === 'none' || headerNav.style.display === "") {
            headerNav.style.display = 'block';
        } else {
            headerNav.style.display = 'none';
        }

        // Toggle the 'aria-expanded' attribute on the button
        const expanded = toggleButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
        toggleButton.setAttribute('aria-expanded', expanded);

        // Toggle the 'aria-hidden' attribute on the navbar
        const hidden = navbar.getAttribute('aria-hidden') === 'true' ? 'false' : 'true';
        navbar.setAttribute('aria-hidden', hidden);

    });
}




/* primary-navigation-toggle idea 2 end */


// Menu elevator animation
const scrollToSectionLinks = document.querySelectorAll('.scroll-to-section a[href*="#"]:not([href="#"])');
scrollToSectionLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        const href = this.getAttribute('href');
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            const target = document.querySelector(href);
            if (target) {
                event.preventDefault();

                const width = window.innerWidth;
                if (width < 991) {
                    const menuTrigger = document.querySelector('.primary-navigation');
                    const headerNav = document.querySelector('.header-area .nav');
                    if (menuTrigger && headerNav) {
                        menuTrigger.classList.remove('active');
                        headerNav.style.display = 'none';
                    }
                }

                const offset = 80; // You can adjust this value as per your requirement
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.scrollY;
                const distance = targetPosition - startPosition - offset;
                const duration = 700; // Animation duration in milliseconds

                let start = null;
                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    }
                }

                // Easing function - cubic easeInOut
                function easeInOutCubic(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t * t + b;
                    t -= 2;
                    return c / 2 * (t * t * t + 2) + b;
                }

                window.requestAnimationFrame(step);
            }
        }
    });
});



// The Slider 
const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Show the first slide initially
showSlide(slideIndex);
