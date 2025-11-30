import reportModel from "../model/reportModel.js"


export const reportController=async(req,res)=>{

try {
    const {
   username,
    email,
    number,
    relation,
    missName,
    age,
    gender,
    date,
    location,
    identity
    }=req.body

    const photo =req.file

    let base=""
if(photo){
     base =photo.buffer.toString("base64")
}



await reportModel.create({
username,
    email,
    number,
    relation,
    missName,
    age,
    gender,
    date,
    location,
    identity,
    photo:base
})

return res.status(200).json({msg:"Report Submitted Successfully"})

} catch (error) {
  return res.status(500).json({msg:"Failed to Repport",error:error.message})  
}

}