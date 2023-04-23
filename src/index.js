
const express = require("express");
const app = express();

const routerUser = require("./routes/routesUser");


app.use(express.json());
app.use("/api",routerUser)

app.listen(3000,()=>{
    console.log("El servidor está en el puerto 3000");
});


