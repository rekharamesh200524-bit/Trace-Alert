import reportModel from "../model/reportModel.js";

export const missController=async(req,res)=>{
    try {
      const miss=await reportModel.find()  
     return res.status(200).json({data:miss})
    } catch (error) {
       return res.status(500).json({msg:"Error while fetching Missing Reports",error:error.message}) 
    }
}