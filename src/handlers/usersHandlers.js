const getUsersHandler = (req,res )=>{
    res.status(200).send("Aqui estan todos los usuarios");
}

const getUserDetailHandler = (req, res) =>{
    const {id} =req.params;
    res.status(200).send(`Aqui esta el detalle de usuario: ${id}`);
}

const createUserHandler = (req, res) =>{
    const {name,email,username} = req.body;
    res.status(200).send(`usuario ${name} creado con el mail:${email}`);
}
module.exports = {
    getUserDetailHandler,
    getUsersHandler,
    createUserHandler
}