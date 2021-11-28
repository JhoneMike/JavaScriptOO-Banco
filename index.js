import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente('João', 99944433309);
const cliente2 = new Cliente('Jessica', 88844455503);
const cliente3 = new Cliente('Emanoel', 9944553322);

const contaCorrente1 = new ContaCorrente(cliente1, 1000, 10212-2);
const contaCorrente2 = new ContaCorrente(cliente2, 2000, 20214-2, 0);
const contaPoupanca = new ContaPoupanca(cliente3, 3000, 20265-7, 100);

contaCorrente1.deposito(2000);
contaCorrente1.transferencia(100, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);