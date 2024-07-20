

const prompt = require("prompt-sync")()


let names = [];
let name;

while (true) {
  name = prompt("Ingresa un nombre (deja vacío y presiona Enter para terminar):");
  if (name === "") {
    break; // Termina el bucle si la entrada está vacía
  }
  names.push(name);
}

let totalList = names.length

let longestName = names.reduce((longest, currentName) => {
  return currentName.length > longest.length ? currentName : longest;
}, "");

let shortestName = names.reduce((shortest, currentName) => {
  return currentName.length < shortest.length ? currentName : shortest;
}, names[0]);


console.log(`Lista de nombres: ${names}`);
console.log(`Total de nombres: ${totalList}`)
console.log(`El nombre mas corto es: ${shortestName}`);
console.log(`El nombre mas largo es: ${longestName}`);
