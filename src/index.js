
const express = require("express");
const app = express();

const routerUser = require("./routes/routesUser");

app.use(express.json());
app.use("/api",routerUser)

app.listen(3000,()=>{
    console.log("El servidor está en el puerto 3000");
});






/*
app.post("/create",async(req,res)=>{
    const {nombre,apellido,email} = req.body;
    
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    
   try{
    const usuario = await prisma.usuario.create({
        data:{
            nombre:nombre,
            apellido:apellido,
            email:email
        }
    })
    if(!usuario){
        return res.status(400).json({
            mensaje:"Error al crear"
        });
    }
    return res.status(201).json({
        mensaje:"Usuario creado correctamente",
        usuario: usuario
    })

   }catch(error){
      return res.status(400).json({
        error:error
      })
   }
});


app.put("/update/:id",async(req,res)=>{
    const {id} = req.params;
    const {nombre,apellido,email} = req.body;

    const usuario = await prisma.usuario.update({
        where:{
            id: Number(id)
        },
        data:{
            nombre:nombre,
            apellido:apellido,
            email:email
        }
       
    })
    if(!usuario){
        return res.status(400).json({
            mensaje:"Error al actualizar"
        });
    }
    return res.status(200).json({
        mensaje:"Usuario actualizado correctamente",
        usuario: usuario
    })

})

app.get("/getall",);


app.delete("/delete/:id",async(req,res)=>{

    const {id} = req.params;

    await prisma.usuario.delete({
        where:{
            id:Number(id)
        }
    })
    return res.status(200).json({
        mensaje:"Usuario eliminado correctamente"
    })
});
*/