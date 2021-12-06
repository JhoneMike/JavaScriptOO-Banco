export class Funcionario{
    constructor(nome, cpf, idade, salario){
        this._nome = nome;
        this._cpf = cpf;
        this._idade = idade;
        this._salario = salario;

        this._senha = "admin";
    }

    definirSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }
}