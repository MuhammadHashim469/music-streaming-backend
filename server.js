require("dotenv").config();
const app=require("./src/app");
const ConnectDb=require("./Db/db");


ConnectDb()
app.listen(3000, ()=>{
    console.log("app is running on port 3000");
})