/* Cadastro de sorvetes
Escreva um programa que faça o seguinte:

pergunte para a usuária o sabor a ser cadastrado
se a usuaria digitar 0, imprima a lista de sabores que ela cadastrou e saia do programa. */

const readlineSync = require("readline-sync");

let sabor = readlineSync.question("Qual o sabor a ser cadastrado? ");

let sabores = [];

function cadastrarSabor() {
  while (sabor != 0) {
    sabores.push(sabor);
    sabor = readlineSync.question("Qual o sabor a ser cadastrado? ");
  }
  //   console.log(sabores);
}

cadastrarSabor();

console.log("======================");
console.log("Sabores cadastrados:\n");

// para mostrar a lista
for (let index = 0; index < sabores.length; index++) {
  console.log(sabores[index]);
}
