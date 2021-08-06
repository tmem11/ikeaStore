const mongoose =require('mongoose');
const {Decimal128} = require("bson");
const furnitureSchema= new mongoose.Schema({
    codeNumber:{
        type:String,
        required:true
    },
    measurs:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    price:{
        type:Decimal128,
        required:true
    },
    types:{
        ref:"Type",
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})
module.exports=mongoose.model('Furniture',furnitureSchema);
