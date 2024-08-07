document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    let lastScrollY = window.scrollY;
    let currentIndex = 0;
    let timeout;

    const showBubbles = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        bubbles.forEach((bubble, index) => {
            const bubbleTop = bubble.getBoundingClientRect().top;

            if (bubbleTop < triggerBottom && index === currentIndex) {
                bubble.classList.add('visible');
                currentIndex++;
                if (currentIndex < bubbles.length) {
                    // Adjust the delay here for the gap between bubbles
                    timeout = setTimeout(() => {
                        showBubbles();
                    }, 800); // Increase the delay to 1200ms for a larger gap (adjust as needed)
                }
            } else if (bubbleTop >= triggerBottom && index <= currentIndex) {
                bubble.classList.remove('visible');
                currentIndex = index;
                clearTimeout(timeout);
            }
        });
    };

    window.addEventListener('scroll', () => {
        clearTimeout(timeout);
        if (lastScrollY < window.scrollY) {
            showBubbles();
        } else {
            currentIndex = Math.max(0, currentIndex - 1);
            showBubbles();
        }
        lastScrollY = window.scrollY;
    });

    showBubbles(); // Initial check
});
