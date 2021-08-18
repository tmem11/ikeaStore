const mongoose =require('mongoose');
const typesSchema= new mongoose.Schema({
     name:{
         type:String,
         required:true
     }
}
, {versionKey:'_somethingElse'}
)
module.exports=mongoose.model('Type',typesSchema);

