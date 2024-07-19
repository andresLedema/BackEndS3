

//const namesList []
/*
console.log("Bienvenido!")
let name = prompt("Ingresa tu nombre: ")

console.log(`Bienvenido ${name}`)
*/

const prompt = require("prompt-sync")()
/*
let names = [];
let name;

while (true) {
  name = prompt("Ingresa un nombre (deja vacío y presiona Enter para terminar):");
  if (name === "") {
    break; // Termina el bucle si la entrada está vacía
  }
  names.push(name);
}

console.log("Lista de nombres:", names);
*/

let names = [];
let name;

do {
  name = prompt("Ingresa un nombre (deja vacío y presiona Enter para terminar):");
  if (name !== "") {
    names.push(name);
  }
} while (name !== "");

console.log("Lista de nombres:", names);

