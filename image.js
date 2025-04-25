let slideIndex = 0;
autoShowSlides();

function autoShowSlides() {
    let slides = document.getElementsByClassName("TSBGallery");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "prev"); // Remove active and prev classes
    }
    let prevIndex = slideIndex; // Track the previous slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide if at the end
    }
    if (prevIndex > 0) {
        slides[prevIndex - 1].classList.add("prev"); // Mark the previous slide for sliding out
    }
    slides[slideIndex - 1].classList.add("active"); // Mark the current slide as active
    setTimeout(autoShowSlides, 3000); // Change image every 3 seconds
}