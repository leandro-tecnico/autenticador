import Usuario from "../models/Usuario.mjs";

export default class UsuariosController {
    constructor() {
    }

    listar() {
        const usuario = new Usuario();
        return usuario.all();
    }

    adicionar() {
        const usuario = new Usuario("João", 70, false);
        usuario.add();
    }
}