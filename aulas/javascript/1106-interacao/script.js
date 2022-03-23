const boato = document.querySelector('.botao');

function mostrar() {
  const texto = document.querySelector('.texto');
  texto.classList.toggle('ativar');
}

boato.addEventListener('click', mostrar);