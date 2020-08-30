/* Top 5 dos melhores sabores Considere o seguinte array:
let sabores = ["Limão", "Milho", "Napolitano", "Maracujá"];
Escreva uma funcão chamada topissimos() que recebe um array como parâmetro.

Retorne true ou false dependendo de o array ter pelo menos 5 sabores.

dica: Modifique o array para validar se sua função está retornando o valor correto.

Imprima no console o resultado. */

let sabores = ["Limão", "Milho", "Napolitano", "Maracujá", "Morango"];
let resultado;

function topissimos(array) {
  if (array.length >= 5) {
    resultado = true;
    // return resultado;
    console.log(resultado);
  } else {
    resultado = false;
    // return resultado;
    console.log(resultado);
  }
}

topissimos(sabores);
