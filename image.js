let slideIndex = 0;
autoShowSlides();

function autoShowSlides() {
    let slides = document.getElementsByClassName("TSBGallery");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "prev");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(autoShowSlides, 3000);
}