const express = require("express");
const routes = express.Router();

const usuarioController = require("./controller/usuarioController");
const tokenController = require("./controller/tokenController");

routes.post("/cadastro/usuario", usuarioController.userCreate);
routes.get("/validar/token/:idtoken", tokenController.validarToken);
routes.get("/teste/email",tokenController.enviarToken);

module.exports = routes;
