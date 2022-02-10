const mobileMenuContainer = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('navbar__menu');
const navLinks = document.querySelectorAll('.navbar__item');
const navLogo = document.querySelector('.logo__container');
const aboutOptions = document.getElementById('about__options')
const navbarSection = document.getElementById('navbar__section')

const btnProfessional = document.getElementById("Professional")
const btnPersonal = document.getElementById("Personal")
const btnEducation = document.getElementById("Education")
const slideProffesional= document.getElementById("slide__wrapper")
const aboutHighlight= document.getElementById("about__options__highlight")
const resumeContainer = document.getElementById("Resume__Container")
const resumeCloseButton = document.getElementById("Resume__close_button")
const resumeOpenButton = document.getElementById("Resume__open_button")

// Show active menu when scrolling
const handleScroll = () => {
    navbarSection.classList.add('Show__nav')
    let scrollPos = window.scrollY
    // console.log(scrollPos);
    if(scrollPos===0) {navbarSection.classList.remove('Show__nav')}
};

// Display Mobile Menu
const mobileMenu = () => {
    mobileMenuContainer.classList.toggle('is-active');
    mobileNav.classList.toggle('active');
};

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    mobileMenuContainer.classList.remove("is-active")
    mobileNav.classList.remove('active');
};

resumeOpenButton.addEventListener("click", () => {
    resumeContainer.classList.toggle("toggle__hide");
});
resumeCloseButton.addEventListener("click", () => {
    resumeContainer.classList.toggle("toggle__hide");
});
btnProfessional.addEventListener("click", () => {
    slideProffesional.classList.add("left")
    slideProffesional.classList.remove("center")
    slideProffesional.classList.remove("right")
    aboutHighlight.classList.add("left")
    aboutHighlight.classList.remove("center")
    aboutHighlight.classList.remove("right")
});
btnPersonal.addEventListener("click", (e) => {
    slideProffesional.classList.remove("left")
    slideProffesional.classList.add("center")
    slideProffesional.classList.remove("right")
    aboutHighlight.classList.remove("left")
    aboutHighlight.classList.add("center")
    aboutHighlight.classList.remove("right")
});
btnEducation.addEventListener("click", (e) => {
    slideProffesional.classList.remove("left")
    slideProffesional.classList.remove("center")
    slideProffesional.classList.add("right")
    aboutHighlight.classList.remove("left")
    aboutHighlight.classList.remove("center")
    aboutHighlight.classList.add("right")
});

window.addEventListener('scroll', handleScroll);
mobileMenuContainer.addEventListener('click', mobileMenu);
navLinks.forEach((Link)=> Link.addEventListener('click', hideMobileMenu));
navLogo.addEventListener('click', hideMobileMenu);
