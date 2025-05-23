import Express from "express";

import usuariosController from "../controllers/UsuariosController.mjs"

const router = Express.Router();

router.get('/api/usuarios', (req, res) => {
    const usuarios = new usuariosController();
    res.send(usuarios.listar());
    //res.send("lista de usuários");
});
router.get('/api/adicionar', (req, res) => {
    const usuarios = new usuariosController();
    usuarios.adicionar();
    res.send("usuario adicionado com sucesso!");
})
export default router;