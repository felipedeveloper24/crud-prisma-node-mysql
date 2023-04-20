
const express = require("express");

const routerUser = express.Router();

const userController = require("../controllers/userController");

routerUser.post("/usuario/create",userController.crear_usuario);

routerUser.get("/usuario/getall",userController.obtener_usuarios);


module.exports=routerUser;