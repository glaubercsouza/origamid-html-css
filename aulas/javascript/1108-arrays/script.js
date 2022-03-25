const lista = ["JavaScript", "HTML", "CSS", "PHP"];

const body = document.querySelector("body");

for (let index = 0; index < lista.length; index++) {
  body.innerHTML += "<li>" + lista[index] + "</li>";
}
