const { Router } = require("express");
const { getUsersHandler, getUserDetailHandler, createUserHandler } = require("../handlers/usersHandlers");
const usersRouter = Router()

usersRouter.get("/", getUsersHandler)
usersRouter.get("/:id", getUserDetailHandler)
usersRouter.post("/", createUserHandler)


module.exports = usersRouter