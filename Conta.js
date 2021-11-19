export class Conta{
    constructor(saldo, titular, agencia, numero){
        this._saldo = saldo;
        this._titular = titular;
        this._agencia = agencia;
        this._numero = numero;
    }

    get titular(){
        return this._titular;
    }

    set titular(titularDaConta){
        if(titularDaConta instanceof Cliente){
            this._titular = titularDaConta;
        }        
    }

    saque(valor){
        if(valor >= this._saldo || valor < 0){
            return;
        }
        this._saldo -= valor;
        return valor;
    }

    deposito(valor){
        if(valor > 0){
            this._saldo += valor;
        }else{
            console.log("Favor verifique o valor informado, os dados inseridos ou tente novamente mais tarde!");
        }
    }

    transferencia(valor, conta){
        if(this._saldo >= valor && conta != null){
            this.saque(valor);
            conta.deposito(valor);
        }else{
            console.log("Verifique os dados inseridos ou tente novamente mais tarde!");
        }
    }
}