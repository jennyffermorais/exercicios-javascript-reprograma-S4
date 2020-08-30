/* Crie um objeto chamado facebookProfile. O objeto deve ter três propriedades:
seu nome (name)
o número de amigos (friends) que você tem e
um array de mensagens (messages) que você postou (como strings)
O objeto deve também possuir quatro métodos:

postMessage(message) - adiciona uma nova mensagem em formato de string na array
deleteMessage(index) - remove a mensagem correspondente ao índice fornecido
addFriend() - aumenta a contagem de amigos em 1
removeFriend() - diminui a contagem de amigos em 1 */

let facebookProfile = {
  name: "Jennyffer",
  friends: 100,
  messages: ["mensagem 1", "mensagem 2", "mensagem 3", "mensagem 4"],
  message: function postMessage() {
    facebookProfile.messages.push("mensagem 5");
  },
  delete: function deleteMessage(index) {
    facebookProfile.messages.splice(index, 1);
  },
  adicionar: function addFriend() {
    facebookProfile.friends += 1;
  },
  remover: function removeFriend() {
    facebookProfile.friends -= 1;
  },
};

// facebookProfile.remover()
