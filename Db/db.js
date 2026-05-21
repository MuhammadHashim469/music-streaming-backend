const mongoose=require("mongoose");
const dns= require("node:dns/promises")
async function  ConnectDB(){
      dns.setServers(["1.1.1.1", "1.0.0.1", "8.8.8.8"]);  
     mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connected"))
.catch(err => console.log(err));
}
module.exports= ConnectDB