document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const indicator = document.querySelector('.indicator');
    
    const updateIndicator = () => {
        const activeItem = document.querySelector('.nav-item.active');
        if (activeItem) {
            const rect = activeItem.getBoundingClientRect();
            const sidebarRect = document.querySelector('.sidebar').getBoundingClientRect();
            const sidebarOffset = sidebarRect.left;
            indicator.style.width = `${rect.width}px`;
            indicator.style.left = `${rect.left - sidebarOffset}px`;
        }
    };
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            updateIndicator();
        });
    });
    
    updateIndicator();
});