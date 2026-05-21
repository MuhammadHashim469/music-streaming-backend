const userModel = require("../models/user.model");
const jsonwebtoken = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

async function registerUser(req,res){

const {username,email,password,role="user"} = req.body;

const isUserAlreadyExist = await userModel.findOne({
    $or:[
        {username},
        {email}
    ]
})

if(isUserAlreadyExist){
    return res.status(409).json({
        message:"User Is already Exist"
    })
}


const hash = await bcryptjs.hash(password,10)

const user = await userModel.create({
    username,
    email,
    password:hash,
    role
})

const token = jsonwebtoken.sign({
    id:user.id,
    role:user.role
},process.env.JWT_SECRET)

res.cookie("token",token)

res.status(201).json({
    message:"User register Successfully",
    user:{
        id:user.id,
        username:user.username,
        email:user.email,
        password:user.password,
        role:user.role
    }
})




}

async function Userlogin(req, res) {
  const { username, email, password } = req.body;

  // Validation
  if ((!username && !email) || !password) {
    return res.status(400).json({
      message: "Username or email and password are required"
    });
  }

  const user = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  const ispasswordvalid = await bcryptjs.compare(
    password,
    user.password
  );

  if (!ispasswordvalid) {
    return res.status(401).json({
      message: "Invalid password"
    });
  }

  const token = jsonwebtoken.sign(
    {
      id: user._id,
      role: user.role
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User login successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  });
}
async function logoutUser(req,res){
    res.clearCookie("token")
    res.status(201).json({
        message:"User logout Successfully"
    })
}



module.exports = {registerUser , Userlogin,logoutUser}