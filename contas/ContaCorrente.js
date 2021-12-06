import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    
    constructor(titular, agencia, numero, saldo){
        super(titular, agencia, numero, 0);
    }

    saque(valor){
        const taxaDeSaque = 1.2;
        const valorAjustado = valor * taxaDeSaque;
        if(this._saldo >= valorAjustado){
            this._saldo -= valorAjustado;
            return console.log("Saque no valor de", valorAjustado, "efetuado com sucesso!");
        }
    }
    
}