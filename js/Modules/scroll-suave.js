export default function initSmoothScroll() {
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function smoothScroll(event) {
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    event.preventDefault();
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linkInterno.forEach((link) => {
    link.addEventListener('click', smoothScroll);
  });
}
