// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
        
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.02)';
            section.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
        });
        
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)';
            section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
    });
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#1C3D3D';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = 'white';
        });

        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });

            setTimeout(() => {
                targetSection.classList.add('visible');
            }, 500);
        });
    });

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                section.classList.add('visible');
            }
        });
    });
});
