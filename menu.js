const menuIcon = document.querySelector('.menuIcon');

const offScreen = document.querySelector('.menuOffPage');

menuIcon.addEventListener('click', () => {
    offScreen.classList.toggle('active');
    menuIcon.classList.toggle('active');
    
});