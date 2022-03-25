const links = document.querySelectorAll("nav a");

function ativarLink(item) {
  const href = item.href;
  if (href === document.location.href) {
    item.style.backgroundColor = "black";
    item.style.color = "white";
  }
}

links.forEach(ativarLink);
