document.addEventListener('DOMContentLoaded', () => {

    // Header scroll effect
    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // Scroll reveal
    const revealTargets = document.querySelectorAll(
        '.section-head, .project-card, .contact-text, .contact-action, .hero-eyebrow, .hero h1, .hero-lead, .hero-meta'
    );
    if (revealTargets.length && 'IntersectionObserver' in window) {
        revealTargets.forEach(el => el.classList.add('reveal-init'));
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        revealTargets.forEach(el => obs.observe(el));
    }

    // Smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id.length < 2) return;
            const t = document.querySelector(id);
            if (t) {
                e.preventDefault();
                t.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
