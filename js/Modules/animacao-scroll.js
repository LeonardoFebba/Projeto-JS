export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((sections) => {
        const sectionTop = sections.getBoundingClientRect().top;
        const sectionVisible = sectionTop - windowMetade < 0;
        if (sectionVisible) {
          sections.classList.add('ativo');
        } else if (sections.classList.contains('ativo')) {
          sections.classList.add('ativo');
        }
      });
    }

    window.addEventListener('scroll', animaScroll);
  }
}
