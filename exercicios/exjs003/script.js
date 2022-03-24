const botao = document.querySelector("button");
let total = Number(document.querySelector("div").innerText);

function somar() {
  total = total + 1;
  if (total < 10) {
    document.querySelector("div").innerText = total;
  } else {
    console.log("Valor máximo atingido");
  }
}

if (botao) {
  botao.addEventListener("click", somar);
}
