/* Escreva uma função que recebe 2 parametros: array e número. Você deverá usar um laço de repetição para remover do array a quantidade exata passada como parametro da função.
Por fim, imprima no console o array modificado pela sua função Exemplo:

let sorvetes = ["Chocolate", "Creme", "Iogurte"];

removeSabor(sorvetes, 2);

console.log(sorvetes);
// retorna ["Chocolate] */

let sorvetes = ["Chocolate", "Creme", "Iogurte", "Flocos"];

function removeSabor(array, numero) {
  for (let index = 0; index < numero; index++) {
    array.pop();
  }
}

removeSabor(sorvetes, 3);

console.log(sorvetes);
