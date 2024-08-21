const getPostsHandler = (req, res) =>{
    res.status(200).send("Aqui estan todos los Post")
}

const createPostHandler = (req,res) =>{
    res.status(200).send("Aqui se crea el Post")
}

const getDetailPostHandler = (req, res) =>{
    res.status(200).send("Detalle del post")
}

module.exports = {
    getPostsHandler,
    createPostHandler,
    getDetailPostHandler
    
}