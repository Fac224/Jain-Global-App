// This is a simple example for parallax scrolling.
// In a real project, this file would contain more complex code
// to make elements move at different speeds when you scroll.

document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    parallaxElements.forEach(function(element) {
        const scrollPosition = window.pageYOffset;
        // Adjust the speed of the parallax effect
        element.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    });
});