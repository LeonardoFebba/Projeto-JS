export default function initFetchBitCoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((btc) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (100 / btc.BRL.sell).toFixed(4);
    });
  // https://blockchain.info/ticker
}
