/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
export default function animaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');
  numeros.forEach((event) => {
    const total = +event.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      event.innerText = start;
      if (start > total) {
        event.innerHTML = total;
        clearInterval(timer);
      }
    }, 100);
  });

  function handleMutation(mutation) {
    if (!mutation[0].target.classList.contains('ativo')) {
      obeserver.disconnect();
      initAnima();
    }
  }
  const obeserverTarget = document.querySelector('.numeros');
  const obeserver = new MutationObserver(handleMutation);
  obeserver.observe(obeserverTarget, { attributes: true });
}
