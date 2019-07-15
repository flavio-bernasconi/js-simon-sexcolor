var nome = prompt("inserisci nome");
var sesso = prompt ("inserisci genere");

var elemento = document.getElementById('nome');

elemento.innerHTML = nome;

if (sesso == "maschio") {
  elemento.style.color = "blue";
}
else if (sesso == "femmina") {
  elemento.style.color = "pink";
}
else {
  elemento.style.color = "black";
}
