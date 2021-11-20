import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial,titular, agencia, numero){
        super(saldoInicial, titular, agencia, numero);
    }
}
