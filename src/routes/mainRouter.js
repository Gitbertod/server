const {Router} = require("express");
const usersRouter = require("./users.routes");
const postRouter = require("./posts.routes");
const mainRouter = Router()

mainRouter.use("/users",usersRouter);
mainRouter.use("/posts",postRouter);



module.exports = mainRouter