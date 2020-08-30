/* Conta no banco
let contaCorrente = {
  saldo: 1000,
  taxaDeJuros: 1,
  depositar: function adicionarDinheiros(qtde) {
    if (qtde > 0) {
      contaCorrente.saldo += qtde;
    }
  },
  sacar: function retirarDinheiro(qtde) {
    var saldoDisponivel = contaCorrente.saldo - qtde;
    if (qtde > 0 && saldoDisponivel >= 0) {
      contaCorrente.saldo -= qtde;
    }
  },
};
adicione um método imprimirExtrato() que retorne a seguinte mensagem de conta:

Olar!
Seu saldo atual é de R$1000 e sua taxa de juros é de 1%. */

let contaCorrente = {
  saldo: 1000,
  taxaDeJuros: 1,
  depositar: function adicionarDinheiros(qtde) {
    if (qtde > 0) {
      contaCorrente.saldo += qtde;
    }
  },
  sacar: function retirarDinheiro(qtde) {
    var saldoDisponivel = contaCorrente.saldo - qtde;
    if (qtde > 0 && saldoDisponivel >= 0) {
      contaCorrente.saldo -= qtde;
    }
  },
  extrato: function imprimirExtrato() {
    console.log(
      `Olar!\nSeu saldo atual é de R$${this.saldo} e sua taxa de juros é de ${this.taxaDeJuros}%.`
    );
  },
};

contaCorrente.sacar(300);

contaCorrente.extrato();

/* Usando o objeto do quiz anterior, responda à seguinte pergunta:
Quais da seguintes são maneiras válidas para acessar propriedades e chamar métodos de um objeto chamado contaCorrente? */

contaCorrente.saldo;
contaCorrente["saldo"];
contaCorrente.taxaDeJuros;
contaCorrente["taxaDeJuros"];
contaCorrente.depositar(100);
contaCorrente.sacar(100);
contaCorrente.extrato();
