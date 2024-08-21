const {Router} = require("express");
const {getPostsHandler,createPostHandler, getDetailPostHandler} = require("../handlers/postsHandlers")
const postRouter = Router()

postRouter.get("/",getPostsHandler)
postRouter.get("/:id",getDetailPostHandler)
postRouter.post("/", createPostHandler)

module.exports = postRouter