import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(titular, agencia, numero, saldoInicial){
        super(titular, agencia, numero, saldoInicial);
    }

    saque(valor){
        const taxaDeSaque = 1.1;
        const valorAjustado = valor * taxaDeSaque;
        if(this._saldo >= valorAjustado){
            this._saldo -= valorAjustado;
            return console.log("Saque no valor de", valorAjustado, "efetuado com sucesso!");
        }
    }
}
