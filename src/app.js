const express=require("express");
const cookieParser=require("cookie-parser");
const Authroutes=require("./Routes/Auth.route")
const Musicroutes=require("./Routes/Music.route")

const app=express()
app.use(express.json()) //midle ware use karti hain q ky req man data ao saky
app.use(cookieParser())     //cookies man data save karni ky leya woh data parh saki



app.use('/api/auth',Authroutes)
app.use('/api/music',Musicroutes)





module.exports=app