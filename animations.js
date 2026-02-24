document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);


    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.background = 'rgba(255, 255, 255, 0.7)';
        }
    });


    const tl = gsap.timeline();
    
    tl.from('.animate-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.animate-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.animate-buttons', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.animate-fade-in-up', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    }, '-=0.6');


    gsap.from('#services-grid > div', {
        scrollTrigger: {
            trigger: '#services-grid',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });


    gsap.from('#features-list > div', {
        scrollTrigger: {
            trigger: '#features-list',
            start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
    });


    gsap.from('#testimonials-grid > div', {
        scrollTrigger: {
            trigger: '#testimonials-grid',
            start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });
});
