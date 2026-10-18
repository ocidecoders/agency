(function () {
  'use strict';

  // Nav scroll effect
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Contact Form Mailto Logic
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const subjectEl = document.getElementById('cf-subject');
    const nameEl = document.getElementById('cf-name');
    const emailEl = document.getElementById('cf-email');
    const messageEl = document.getElementById('cf-message');
    const fields = [subjectEl, nameEl, emailEl, messageEl];

    let missing = false;
    fields.forEach(el => {
      if (!el.value.trim()) {
        el.classList.add('field-error');
        setTimeout(() => el.classList.remove('field-error'), 500);
        missing = true;
      }
    });

    if (missing) return;

    const subject = subjectEl.value.trim();
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const message = messageEl.value.trim();

    const mailSubject = `[${subject}] — from ${name}`;
    const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n— Sent via ocidecoders.onrender.com`;

    window.location.href = `mailto:ocidecoders@proton.me?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  });
})();
