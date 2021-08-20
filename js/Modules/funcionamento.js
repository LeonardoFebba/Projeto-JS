export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (horarioAberto && semanaAberto) {
    funcionamento.classList.add('aberto');
  }
}

// const agora = new Date();
// const futuro = new Date('Dec 31 2021 23:59');

// agora.getDate() // Dia
// agora.getDay() // Dia da semana 0 a 5 sendo 5 sexta (friday)
// agora.getMonth() // Número dia mês
// agora.getFullYear() // Ano
// agora.getHours() // Horas
// agora.getMinutes() // Minutos
// agora.getTime() //ms desde 1970
// agora.getUTCHours() - 3 //Brasília

// function contador(tempo){
//     return tempo / (24 * 60 * 60 * 1000);
// }

// const diasFuturo = contador(futuro.getTime());
// const diasAgora = contador(agora.getTime());

// console.log(Math.round(diasFuturo - diasAgora));
