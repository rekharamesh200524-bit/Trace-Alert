import jwt from 'jsonwebtoken'
const SECRET_KEY=process.env.SECRET_KEY

export const signMiddleware=(req,res,next)=>{
try {
    const authHeader=req.headers['authorization']
    const token =authHeader?.split("")[1]
    if(!token){
        return res.status(400).json({msg:"no token available"})
    }

    const decoded=jwt.verify(token,SECRET_KEY)
    req.user=decoded
    next()
} catch (error) {
  return res.status(500).json({msg:"Invalid Token"})
}
}