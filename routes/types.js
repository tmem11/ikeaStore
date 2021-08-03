const  express =require('express');
const router=express.Router()
const  type=require('../models/Type');
router.get('/',async (req,res)=>{
    try {
        const types= await type.find()
        res.json(types)
    }
    catch (e) {
        res.send(e);
    }
    
})
module.exports=router
