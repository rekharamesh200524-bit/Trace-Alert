import mongoose from "mongoose";

const alertModel=new mongoose.Schema({
    name:{type:String},
     number:{type:Number},
      missName:{type:String},
       details:{type:String},
},
{timestamps:true}
)

export default mongoose.model('alertData',alertModel)
