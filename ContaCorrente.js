import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    
    constructor(saldo, titular, agencia, numero, ){
        super(0, titular, agencia, numero);
    }

    saque(valor){
        
    }
    
}