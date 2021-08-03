const  express =require('express');
const router=express.Router()
const  Type=require('../models/Type');
router.get('/',async (req,res)=>{
    try {
        const types= await Type.find()
        res.json(types)
    }
    catch (e) {
        res.send(e);
    }
    
})
router.get('/:id',async (req,res)=>{
    try {
        const type= await Type.findById(req.params.id)
        res.json(type)
    }
    catch (e) {
        res.send(e);
    }

})
router.post('/' , async (req,res)=>{
    const type=new Type({
        name:req.body.name
    })
    try {
        const t1=await type.save()
        res.json(t1)

    }
    catch (e) {
        res.send(e);

    }

})
module.exports=router
