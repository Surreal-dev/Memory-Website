document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-item');

    hamburgerMenu.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });
});
