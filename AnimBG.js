document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.body.style.backgroundPositionY = `${scrollPosition * 0.25}px`;
});
