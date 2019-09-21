const express = require("express");
const routes = express.Router();

const usuarioController = require("./controller/usuarioController");
const tokenController = require("./controller/tokenController");
const logController = require("./controller/logsController");

routes.post("/cadastro/usuario", usuarioController.userCreate);
routes.get("/validar/token/:idtoken", tokenController.validarToken);
routes.post("/teste/email", tokenController.enviarToken);

///controles
routes.get("/users", usuarioController.users);
routes.get("/tokens", tokenController.tokens);
routes.get("/logs", logController.logs);

module.exports = routes;
