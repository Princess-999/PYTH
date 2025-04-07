// Hero Carousel
class Carousel {
    constructor(element) {
        this.element = element;
        this.items = Array.from(element.getElementsByClassName('carousel-item'));
        this.currentIndex = 0;
        this.interval = null;
        this.init();
    }

    init() {
        // Create navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        
        this.items.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.setAttribute('aria-label', `Slide ${index + 1}`);
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        this.element.appendChild(dotsContainer);
        this.dots = Array.from(dotsContainer.children);
        
        // Start automatic rotation
        this.startAutoRotation();
        this.updateDots();
    }

    startAutoRotation() {
        this.interval = setInterval(() => {
            this.next();
        }, 5000);
    }

    stopAutoRotation() {
        clearInterval(this.interval);
    }

    next() {
        this.goToSlide((this.currentIndex + 1) % this.items.length);
    }

    goToSlide(index) {
        this.items[this.currentIndex].classList.remove('active');
        this.currentIndex = index;
        this.items[this.currentIndex].classList.add('active');
        this.updateDots();
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
}

// Mobile Navigation
function initMobileNav() {
    const nav = document.querySelector('nav');
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-toggle';
    menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
    menuBtn.innerHTML = '<span></span><span></span><span></span>';
    
    nav.insertBefore(menuBtn, nav.firstChild);
    
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form Validation
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Validate required fields
            form.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Validate email fields
            form.querySelectorAll('input[type="email"]').forEach(email => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    isValid = false;
                    email.classList.add('error');
                }
            });
            
            if (isValid) {
                // Submit form
                console.log('Form submitted successfully');
                form.submit();
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel if it exists
    const carouselElement = document.querySelector('.hero-carousel');
    if (carouselElement) {
        new Carousel(carouselElement);
    }
    
    initMobileNav();
    initSmoothScroll();
    initFormValidation();
    
    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}); 