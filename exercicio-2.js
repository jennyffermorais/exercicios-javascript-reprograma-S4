/* Crie um array de preços com as seguintes informações:
1.23,
48.11,
90.11,
8.50,
9.99,
1.00,
1.10,
67.00
Altere o preço do 1°, 3°, 7° elemento. */

let precos = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];

precos.splice(0, 1, 2.23);
precos.splice(2, 1, 89.0);
precos.splice(6, 1, 10.0);

console.log(precos)
