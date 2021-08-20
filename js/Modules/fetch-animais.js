import animaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  async function fetchLuminarias(url) {
    const pageResponse = await fetch(url);
    const luminariasJSON = await pageResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');
    luminariasJSON.forEach((element) => {
      const divLuminaria = createLuminaria(element);
      numerosGrid.appendChild(divLuminaria);
    });
    animaNumeros();
  }

  function createLuminaria(lumi) {
    const div = document.createElement('div');
    div.classList.add('numero-luminaria');
    div.innerHTML = `<h3>${lumi.desenho}</h3><span data-numero>${lumi.total}</span>`;
    return div;
  }

  fetchLuminarias('./js/luminariasapi.json');
}
