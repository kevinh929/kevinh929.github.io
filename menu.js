const menuIcon = document.querySelector('.menuIcon');

const offScreen = document.querySelector('.menuOffPage');

menuIcon.addEventListener('click', () => {
    offScreen.classList.toggle('active');
    menuIcon.classList.toggle('active');
    
});

function toggleMenu() {
    const menu = document.getElementById("navigation");
    const menuIcon = document.querySelector(".menuIcon");
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
}