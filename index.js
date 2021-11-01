class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    titular;
    agencia;
    numero;
    saldo;

    saque(valor){
        if(this.saldo >= valor && valor > 0){
            this.saldo -= valor;
            console.log("Transação efetuada com sucesso. Saldo atual", this.saldo);
        }else{
            console.log("Saldo insuficiente, transação encerrada!");
        }
    }

    deposito(valor, ContaCorrente){
        if(valor > 0){
            this.saldo += valor;
        }else{
            console.log("Favor verifique o valor informado, os dados inseridos ou tente novamente mais tarde!");
        }
    }

    transferencia(valor, ContaCorrente){
        if(this.saldo >= valor && ContaCorrente != null){
            this.saque(valor);
            ContaCorrente.deposito(valor);
        }else{
            console.log("Verifique os dados inseridos ou tente novamente mais tarde!");
        }
    }
}

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
contaCorrente1.saldo = 0;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.titular = cliente2;
contaCorrente2.agencia = 2000;
contaCorrente2.numero  = 20214-2;
contaCorrente2.saldo = 0;


contaCorrente1.deposito(4000);

contaCorrente1.transferencia(1000, contaCorrente2);

console.log(contaCorrente1.titular.nome, " Seu saldo é de: ", contaCorrente1.saldo);

console.log(contaCorrente2.titular.nome, " Seu saldo é de: ", contaCorrente2.saldo);
