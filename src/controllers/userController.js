
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

module.exports={crear_usuario,obtener_usuarios};