const {Sequelize, DataTypes} = require("sequelize");
require("dotenv").config()

const UsersModel = require("./models/UsersModel");
const PostModel = require("./models/PostModel");

const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME} = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,{logging:false})

//DEFINICION DE MODELOS
UsersModel(sequelize);
PostModel(sequelize);

const {User , Post} = sequelize.models

//ASOCIACIONES 
User.hasMany(Post);
Post.belongsTo(User);

module.exports ={
   ...sequelize.models,
    conn: sequelize
}