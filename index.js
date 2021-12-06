import { Cliente } from "./clientes/Cliente.js";
import { ContaCorrente } from "./contas/ContaCorrente.js";
import { ContaPoupanca } from "./contas/ContaPoupanca.js";
import { Gerente } from "./Funcionarios/Gerente.js";

const cliente1 = new Cliente('João', 99944433309);
const cliente2 = new Cliente('Jessica', 88844455503);
const cliente3 = new Cliente('Emanoel', 9944553322);

const contaCorrente1 = new ContaCorrente(cliente1, 1000, 10212-2);
const contaCorrente2 = new ContaCorrente(cliente2, 2000, 20214-2, 0);
const contaPoupanca = new ContaPoupanca(cliente3, 3000, 20265-7, 100);

contaCorrente1.deposito(2000);
console.log("Saldo da conta Corrente1 antes da transferencia,",contaCorrente1._saldo);
console.log("Saldo da conta Corrente2 antes da transferencia,",contaCorrente2._saldo);
contaCorrente1.transferencia(contaCorrente2, 100);

const gerente = new Gerente("João", 12343223456, 40, 30000);
gerente.definirSenha("1234");

console.log(gerente);