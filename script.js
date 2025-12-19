

// 2. Vision Button click effect
const visionButton = document.getElementById('visionButton');
if (visionButton) {
    visionButton.addEventListener('click', () => {
        visionButton.textContent = 'Loading Vision...';
        visionButton.classList.add('btn-warning', 'text-dark');
        visionButton.classList.remove('btn-primary', 'animate__shakeX');

        setTimeout(() => {
            alert('Vision Page Placeholder: This is where you would link to or display your detailed vision for the constituency.');
            visionButton.textContent = 'Click Here to View My Vision';
            visionButton.classList.remove('btn-warning', 'text-dark');
            visionButton.classList.add('btn-primary'); // Keep shakeX animation on CSS for infinite effect
        }, 1500); // Simulate a short loading time
    });
}

// ========================================
// JAVASCRIPT FOR SCROLL ANIMATIONS (Intersection Observer)
// ========================================

document.addEventListener("DOMContentLoaded", function () {
    // Select all sections we want to animate on scroll
    const animatedSections = document.querySelectorAll('.content-container');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item must be visible
    };

    // Callback function when an element enters or leaves the viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in the viewport, add the 'in-view' class
                entry.target.classList.add('in-view');
                // Stop observing once animated (optional)
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing each animated section
    animatedSections.forEach(section => {
        observer.observe(section);
    });
});




// Example JavaScript: Show alert when clicking any phone number
document.querySelectorAll('.contact-number a').forEach(num => {
    num.addEventListener('click', () => {
        alert('Calling ' + num.textContent);
    });
});

