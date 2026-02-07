document.addEventListener('DOMContentLoaded', () => {
    // Body Zone Interactivity
    const zoneSelectors = document.querySelectorAll('.zone-selector');

    zoneSelectors.forEach(selector => {
        selector.addEventListener('click', () => {
            const zoneId = selector.dataset.zone;

            // Remove active class from all selectors
            zoneSelectors.forEach(s => s.classList.remove('active'));
            // Remove active highlights from all SVG zones
            document.querySelectorAll('.svg-zone').forEach(z => {
                z.style.opacity = '0.1';
            });

            // Add active class to clicked selector
            selector.classList.add('active');

            // Highlight the corresponding SVG zone
            const svgZone = document.getElementById(`svg-zone-${zoneId}`);
            if (svgZone) {
                svgZone.style.opacity = '0.5';
                svgZone.style.fill = 'var(--accent-color)';
            }

            console.log(`Selected zone: ${zoneId}`);
        });
    });

    // Also make SVG zones clickable
    document.querySelectorAll('.svg-zone').forEach(zone => {
        zone.addEventListener('click', () => {
            const zoneId = zone.id.replace('svg-zone-', '');
            const selector = document.querySelector(`.zone-selector[data-zone="${zoneId}"]`);
            if (selector) selector.click();
        });
    });

    // Scroll Reveal Animation (Simple Implementation)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.glass-card, .timeline-item, .roadmap-stage');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            const isActive = accordionItem.classList.contains('active');

            // Close all accordions
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = '0';
            });

            // Open clicked accordion if it wasn't active
            if (!isActive) {
                accordionItem.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });

    // Sub-accordion functionality
    const subAccordionHeaders = document.querySelectorAll('.sub-accordion-header');
    subAccordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const subAccordionContent = header.nextElementSibling;
            const isOpen = subAccordionContent.style.maxHeight && subAccordionContent.style.maxHeight !== '0px';

            // Toggle sub-accordion
            if (isOpen) {
                subAccordionContent.style.maxHeight = '0';
            } else {
                subAccordionContent.style.maxHeight = subAccordionContent.scrollHeight + 'px';
            }
        });
    });

    // Tab functionality for conflicts section
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
        });
    });

    // Main tab navigation
    const mainTabs = document.querySelectorAll('.main-tab');
    mainTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-maintab');

            // Remove active class from all main tabs and contents
            document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.main-tab-content').forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(`maintab-${tabName}`).classList.add('active');

            // Scroll to top when switching tabs
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Timeline interactivity
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    timelineMarkers.forEach(marker => {
        marker.addEventListener('click', () => {
            // Remove active from all markers
            timelineMarkers.forEach(m => m.classList.remove('active'));

            // Add active to clicked marker
            marker.classList.add('active');
        });
    });
});
