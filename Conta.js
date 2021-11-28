export class Conta{
    constructor(titular, agencia, numero, saldo){

        if(this.constructor == Conta){
            throw new Error("Não é permitido isntaciar um objeto do tipo Conta, favor verifique e isntancie um objeto mais especifico!");
        }
        this._titular = titular;
        this._agencia = agencia;
        this._numero = numero;
        this._saldo = saldo;
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
        throw new Error("Esse metodo é abstrato!")
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