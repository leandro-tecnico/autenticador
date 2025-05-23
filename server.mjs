import Express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.mjs";

export default class Server {

    constructor() {
        this.server = Express();
    }

    run(port) {
        this.middlewares();
        //this.routes();
        this.server.listen(port, () => {
            console.log(`Server listen on port ${port}`);
        })
    }

    middlewares() {
        this.server.use(Express.json());
        this.server.use(cors());
        this.server.use(usuarioRoutes);
    }
}