document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    let lastScrollY = window.scrollY;
    let currentIndex = 0;

    const showNextBubble = () => {
        if (currentIndex < bubbles.length) {
            bubbles[currentIndex].classList.add('visible');
            currentIndex++;
            if (currentIndex < bubbles.length) {
                setTimeout(showNextBubble, 3000); // Adjust delay for larger gaps
            }
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                if (entry.target === bubbles[currentIndex]) {
                    showNextBubble();
                }
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    bubbles.forEach(bubble => observer.observe(bubble));

    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            bubbles.forEach(bubble => {
                bubble.classList.remove('visible', 'animated');
            });
            currentIndex = 0;
        }
    });
});
