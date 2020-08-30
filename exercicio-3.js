/* Decidimos renovar o sabor de alguns sorvetes.
let sorvetes = [
  "Coco",
  "Maracujá",
  "Abacaxi",
  "Baunilha",
  "Tangerina",
  "Doce de Leite",
  "Iogurte de frutas vermelhas",
  "Melancia",
  "Chocolate",
  "Chocolate Belga",
  "Torta de limão",
];
Precisamos que você retire do cardápio o sabor Iogurte de frutas vermelhas e acrescente os sabores Paçoquita e Passas ao rum. */

let sorvetes = [
  "Coco",
  "Maracujá",
  "Abacaxi",
  "Baunilha",
  "Tangerina",
  "Doce de Leite",
  "Iogurte de frutas vermelhas",
  "Melancia",
  "Chocolate",
  "Chocolate Belga",
  "Torta de limão",
];

sorvetes.splice(sorvetes.indexOf("Iogurte de frutas vermelhas"), 1, "Paçoquita", "Passas ao rum");

console.log(sorvetes);
