import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import SignUpData from '../model/signModel.js'
const SECRET_KEY=process.env.SECRET_KEY || "rekhaaaa"
export  const loginController=async(req,res)=>{
    try {
const {email,password}=req.body
const exist=await SignUpData.findOne({email})

if(!exist){
    return res.status(400).json({msg:'No users Found'})
}

 const match=await bcrypt.compare(password,exist.password)
 if(!match){
    return res.status(400).json({msg:"Invalid password"})
 }

 const token=jwt.sign({id:exist._id,
    username:exist.username,
    email:exist.email},
    SECRET_KEY,
    {
    expiresIn:'1h'
 })


 return res.status(200).json({msg:'Login Successfully',token,data:{username:exist.username,email:exist.email}})
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg:'login error',error:error.message})
        
    }
}