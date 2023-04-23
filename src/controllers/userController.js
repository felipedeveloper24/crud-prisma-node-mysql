
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const crear_usuario = async(req,res)=>{
    const {nombre,apellido,email} = req.body;

    const validar_usuario = await prisma.usuario.findFirst({
        where:{
            email:email
        }
    })

    if(validar_usuario){
        return res.status(400).json({
            mensaje:"ya existe un usuario con ese correo"
        })
    }


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

}
const actualizar_usuario =async(req,res)=>{
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
}

const obtener_usuarios = async(req,res)=>{
    const usuarios = await prisma.usuario.findMany();

    if(usuarios.length==0){
        return res.status(200).json({
            mensaje:"No hay registros"
        })
    }
    return res.status(200).json({
        usuarios:usuarios
    })
}
const eliminar_usuario = async(req,res)=>{
    const {id} = req.params;

    await prisma.usuario.delete({
        where:{
            id:Number(id)
        }
    })
    return res.status(200).json({
        mensaje:"Usuario eliminado correctamente"
    })
};

const mostrar_usuario = (req,res)=>{
    //Obtenemos el id desde la url 
    //desectructuración del objeto req => request
    const {id} = req.params;
    try{
         prisma.usuario.findFirst({
            where:{
                id: Number(id)
            }
        }).then((data)=>res.status(200).json({data:data})).catch((error)=>{ res.send.status(200).json({error:error})
        })
        /*
        if(!usuario){
            return res.status(200).json({
                mensaje:"El usuario no existe"
            });
        }

        return res.status(200).json({
            mensaje:"se ha encontrado el usuario",
            usuario:usuario
        })
        */

    }catch(error){
        return res.status(400).json({
            mensaje:error
        })
    }
}

module.exports={crear_usuario,obtener_usuarios,actualizar_usuario,eliminar_usuario,mostrar_usuario};