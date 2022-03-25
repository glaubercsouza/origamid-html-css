const links = Array.from(document.querySelectorAll("nav a"));

function logHref(item) {
  const href = item.href;
  console.log(href);
}

links.forEach(logHref);

// Métodos
const lista = ["JavaScript", "HTML", "CSS"];

const ultimo = lista.pop();
const primeiro = lista.shift();

console.log(ultimo);
console.log(primeiro);

lista.push("PHP");
console.log(lista);
