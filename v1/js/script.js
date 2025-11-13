// Loading animation
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Se añade un pequeño ajuste para compensar la altura del header fijo
            const headerOffset = 80; // Ajusta este valor (en píxeles) si tu header es más alto o bajo
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    });
});

// Card hover effects
document.querySelectorAll('.card, .specialization-card, .impact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Parallax effect for hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
});

// --- NUEVO SCRIPT PARA HEADER RESPONSIVO ---

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const mainHeader = document.getElementById('mainHeader');
const navLinks = document.querySelectorAll('.nav-link');

// 1. Abrir y cerrar menú de hamburguesa
navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-visible');
    navToggle.classList.toggle('is-active');

    // Cambia el ícono de hamburguesa a una "X"
    if (navToggle.classList.contains('is-active')) {
        navToggle.innerHTML = '&times;';
        navToggle.style.position = 'fixed'; // Lo fija para que sea visible
        navToggle.style.right = '20px';
    } else {
        navToggle.innerHTML = '&#9776;';
        navToggle.style.position = 'static';
    }
});

// 2. Opcional: Cerrar el menú al hacer clic en un enlace (muy útil en móvil)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('is-visible')) {
            mainNav.classList.remove('is-visible');
            navToggle.classList.remove('is-active');
            navToggle.innerHTML = '&#9776;';
            navToggle.style.position = 'static';
        }
    });
});

// 3. Opcional: Hacer el fondo del header sólido al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainHeader.classList.add('scrolled');
    } else {
        mainHeader.classList.remove('scrolled');
    }
});


// Add animation to timeline items
const timelineObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// Add staggered animation to cards
const cardObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.card-grid .card, .specialization-grid .specialization-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
});