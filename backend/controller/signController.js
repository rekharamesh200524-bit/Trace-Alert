import bcrypt from 'bcrypt'
import SignUpData from '../model/signModel.js'
export const signController =async(req,res)=>{
   
 try {
     const {username,email,password}=req.body
   
    const exist=await SignUpData.findOne({email})

    if(exist){
        return res.status(400).json({msg:"Email Already Exists!"})
     }

     const hased=await bcrypt.hash(password,10)

     const user=await SignUpData.create({
        username,
        email,
        password:hased,
     })

    return res.status(200).json({msg:'SignUp successfully',data:{
        id:user._id,
        username:user.username,
        email:user.email
    } })
    
 } catch (error) {
    console.log(error.message);
    res.status(500).json({msg:'Error occured while signingUp the data!',error:error.message})
    }
}