const { User } = require("../db")

const createUserDB = async (name, email) => {
    return await User.create({ name, email })
}

const getUserController = async() =>{
     const users = await User.findAll()
     return users;
}

const getUserByIdController = async(id) =>{
    const foundUser = await User.findByPk(id)
    if(foundUser.dataValues){
        return foundUser.dataValues
    }
    return "Users Id not found!";
}

const deleteUserController = async (id) =>{


}

const updateUserController = async (id) =>{

}


module.exports = {
    createUserDB,
    getUserController,
    getUserByIdController,
    deleteUserController,
    updateUserController
}