const mongoose =require('mongoose');
const furnitureSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    types:{
        ref:"Type",
        type:mongoose.Schema.Types.ObjectId

    }
})
module.exports=mongoose.model('Type',typesSchema);
