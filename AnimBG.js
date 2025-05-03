document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Adjust the multiplier for parallax speed
});
