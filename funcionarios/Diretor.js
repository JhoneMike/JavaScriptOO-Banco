import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{
    constructor(nome, cpf, idade, salario){
        super(nome, cpf, idade, salario);
    }
}