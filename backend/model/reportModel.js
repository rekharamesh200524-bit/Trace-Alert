import mongoose from 'mongoose'

const reportModel=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    number:{type:Number},
    relation:{type:String},
    missName:{type:String},
    age:{type:Number},
    gender:{type:String},
    date:{type:Date},
    location:{type:String},
    identity:{type:String},
    photo:{type:String}
    
},
{timestamps:true}
)
export default mongoose.model('Reportdata',reportModel)