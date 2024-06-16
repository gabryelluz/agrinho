// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.02)';
            section.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
        });
        
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)';
            section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#4A403A';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = 'white';
        });
    });
});
