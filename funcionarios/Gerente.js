import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    constructor(nome, cpf, idade, salario){
        super(nome, cpf, idade, salario);
    }
}