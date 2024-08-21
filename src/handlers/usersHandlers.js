const { response } = require("express");
const { createUserDB, getUserController, getUserByIdController, deleteUserController } = require("../controllers/usersControllers");

const getUsersHandler = async (req, res) => {
    try {
        const response = await getUserController()
        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getUserByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getUserByIdController(id)
        res.status(200).json(response);

    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createUserHandler = async (req, res) => {
    const { name, email } = req.body;

    try {
        const response = await createUserDB(name, email)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteUserHandler = async (req, res) => {
    try {
        res.status(200).send("Eliminando usuario")
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const updateUserHandler = async (req, res) => {
    const {id } = req.params
    try {
        res.status(200).send("Actualizando usuario "+id)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getUserByIdHandler,
    getUsersHandler,
    createUserHandler,
    deleteUserHandler,
    updateUserHandler
}