export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4); // toFixed -> numero de decimais
    })
    .catch((erro) => {
      // eslint-disable-next-line no-console
      console.log(erro);
    });
}
