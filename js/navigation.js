/**
 * Navigation and Mobile Menu Handler
 * Handles mobile menu toggle, navigation hover effects, and active page highlighting
 */

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) return;

    let isOpen = false;

    mobileMenuBtn.addEventListener('click', () => {
        isOpen = !isOpen;

        if (isOpen) {
            mobileMenu.style.pointerEvents = 'auto';
            if (typeof gsap !== 'undefined') {
                gsap.to(mobileMenu, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                mobileMenu.style.opacity = '1';
                mobileMenu.style.transform = 'translateY(0)';
            }
        } else {
            if (typeof gsap !== 'undefined') {
                gsap.to(mobileMenu, {
                    opacity: 0,
                    y: -16,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        mobileMenu.style.pointerEvents = 'none';
                    }
                });
            } else {
                mobileMenu.style.opacity = '0';
                mobileMenu.style.transform = 'translateY(-16px)';
                mobileMenu.style.pointerEvents = 'none';
            }
        }
    });
}

// Navigation Hover Effects
function initNavigationEffects() {
    const navSymbols = document.querySelectorAll('.nav-symbol');

    navSymbols.forEach(symbol => {
        symbol.addEventListener('mouseenter', () => {
            const span = symbol.querySelector('span:first-child');
            if (span && typeof gsap !== 'undefined') {
                gsap.to(span, {
                    scale: 1.2,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            }
        });

        symbol.addEventListener('mouseleave', () => {
            const span = symbol.querySelector('span:first-child');
            if (span && typeof gsap !== 'undefined') {
                gsap.to(span, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });
}

// Set Active Navigation Based on Current Page
function setActiveNavigation() {
    const links = document.querySelectorAll('.nav-symbol');
    const currentURL = window.location.href;

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentURL.includes(href)) {
            link.classList.add('active');
            const symbolSpan = link.querySelector('span:first-child');
            if (symbolSpan) {
                symbolSpan.classList.remove('text-text-secondary');
                symbolSpan.classList.add('text-accent');
            }
        }
    });
}

// Initialize all navigation functionality
function initNavigation() {
    initMobileMenu();
    initNavigationEffects();
    setActiveNavigation();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}
