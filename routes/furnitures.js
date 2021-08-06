const  express =require('express');
const router=express.Router()
const  Furniture=require('../models/Furniture');
const  types=require('../models/Type');

router.get('/',async (req,res)=>{
    try {
        const types= await Furniture.find()
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
    const furniture=new Furniture({
        name:req.body.name,
        types:req.body.types
    })
    try {

            const t1 = await furniture.save()
            res.json(t1)
    }
    catch (e) {
        res.send(e);

    }

})
module.exports=router
