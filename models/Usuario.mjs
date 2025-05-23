import {usuarios} from "./db.mjs";

export default class Usuarios{

    constructor(nome, idade , administrador){
        this.nome = nome;
        this.idade = idade;
        this.administrador = administrador;
        
        if(!usuarios){
            usuarios = [];
        }
    }

    add(){
        usuarios.push(this);
    }

    all(){
        return usuarios;
    }
}