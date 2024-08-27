import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'

const menuIcon = document.querySelector('.first-button');
const navbarNav = document.getElementById('navbarNav');
 

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle('open');
  navbarNav.classList.toggle('show');
})

let slideIndex = 0;

// Next/previous controls
document.querySelector('.prev').addEventListener('click', () =>{
  slideIndex--
  showSlides(slideIndex);

})

document.querySelector('.next').addEventListener('click', () =>{
  slideIndex++
  showSlides(slideIndex);

})

setInterval(() => {
  slideIndex++
  showSlides(slideIndex);
}, 3000);


// Display the current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    
    // Ensure slideIndex wraps around correctly
    if (n >= slides.length) { 
        slideIndex = 0;
    } 
    if (n < 0) { 
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[slideIndex].classList.add('fade')

    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.remove('fade')
}

// Initialize the slideshow
showSlides(slideIndex);



