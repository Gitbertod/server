const server = require("./src/app")
const {conn} =require("./src/db")
const PORT = process.env.PORT || 3001;

server.listen(PORT,()=>{
    
    conn.sync({force:false}).then(()=>{
        console.log(`Linstening on port ${PORT}`)
        
    });
})