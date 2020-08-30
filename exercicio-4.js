/* (Utilize o array acima para fazer este exercício)
Faremos um evento corporativo e por isso reduziremos nosso cardápio, levando apenas os 3 primeiros sabores da nossa lista. Remova todos os outros sabores. */

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

sorvetes.splice(3, sorvetes.length - 3);
console.log(sorvetes);
