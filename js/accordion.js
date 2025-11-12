document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                accordionContent.classList.remove('active');
            } else {
                this.setAttribute('aria-expanded', 'true');
                accordionContent.classList.add('active');
            }
        });
    });
});

