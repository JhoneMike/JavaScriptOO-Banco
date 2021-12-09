export class Autenticacao{
    static logar(autenticavel, senha){
        if(Autenticacao.usuarioAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static usuarioAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}