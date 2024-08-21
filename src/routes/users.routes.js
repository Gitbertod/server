const { Router } = require("express");
const { getUsersHandler, getUserByIdHandler, createUserHandler,deleteUserHandler,updateUserHandler } = require("../handlers/usersHandlers");
const usersRouter = Router()

usersRouter.get("/", getUsersHandler)
usersRouter.get("/:id", getUserByIdHandler)
usersRouter.post("/", createUserHandler)
usersRouter.delete("/:id", deleteUserHandler)
usersRouter.put("/:id", updateUserHandler)


module.exports = usersRouter