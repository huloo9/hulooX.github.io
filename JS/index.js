let currentSlide = 0;
let slides = document.querySelectorAll('.tp img');
slides[currentSlide].classList.add('active');
let autoSlideInterval = setInterval(autoShowSlides, 3000); 

function changeSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    resetAutoSlide();
}

function autoShowSlides() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoShowSlides, 3000);
}
