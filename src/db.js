const {Sequelize, DataTypes} = require("sequelize");
require("dotenv").config()

const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME} = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/voyant`)

sequelize.define("User",{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue: DataTypes.UUIDV4
    },name:{
        type:DataTypes.STRING,
        
    }

})

module.exports ={
   conn: sequelize
}