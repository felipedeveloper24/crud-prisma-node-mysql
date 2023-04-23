
const express = require("express");

const routerUser = express.Router();

const userController = require("../controllers/userController");

routerUser.post("/usuario/create",userController.crear_usuario);

routerUser.get("/usuario/getall",userController.obtener_usuarios);

routerUser.put("/usuario/update/:id",userController.actualizar_usuario);

routerUser.delete("/usuario/delete/:id",userController.eliminar_usuario);

routerUser.patch("/usuario/show/:id",userController.mostrar_usuario);

module.exports=routerUser;