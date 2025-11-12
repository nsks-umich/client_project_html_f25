document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        const hamburgerIcon = hamburger.querySelector('.hamburger-icon');
        
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            const isExpanded = navLinks.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
            
            if (hamburgerIcon) {
                hamburgerIcon.classList.toggle('active');
            }
        });
        
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 700) {
                    navLinks.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                    if (hamburgerIcon) {
                        hamburgerIcon.classList.remove('active');
                    }
                }
            });
        });
        
        document.addEventListener('click', function(event) {
            const isClickInsideNav = event.target.closest('.navbar');
            if (!isClickInsideNav && navLinks.classList.contains('active') && window.innerWidth < 700) {
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                const hamburgerIcon = hamburger.querySelector('.hamburger-icon');
                if (hamburgerIcon) {
                    hamburgerIcon.classList.remove('active');
                }
            }
        });
    }
});

