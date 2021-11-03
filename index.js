import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "João";
cliente1.cpf = 99944433309;

const cliente2 = new Cliente();
cliente2.nome = "Jessica";
cliente2.cpf = 88844455503;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.titular = cliente1;
contaCorrente1.agencia = 1000;
contaCorrente1.numero  = 10212-2;
contaCorrente1._saldo = 0;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.titular = cliente2;
contaCorrente2.agencia = 2000;
contaCorrente2.numero  = 20214-2;
contaCorrente2._saldo = 0;


contaCorrente1.deposito(1000);
contaCorrente1.transferencia(540, contaCorrente1);

console.log(contaCorrente1);
console.log(contaCorrente2);