const  express =require('express');
const router=express.Router()
const  Type=require('../models/Type');


/**
 * @swagger
 * components:
 *   schemas:
 *     Type:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the types
 *         name:
 *           type: string
 *           description: The type name
 *       example:
 *         id: 61180f4902fe53affbd43c2a
 *         name: table
 */

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: The Types managing API
 */

/**
 * @swagger
 * /types:
 *   get:
 *     summary: Returns the list of all the types
 *     tags: [Types]
 *     responses:
 *       200:
 *         description: The list of the types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Type'
 */
router.get('/', async (req,res)=>{
    try {
        const types= await Type.find()
        res.send(types)
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
router.patch('/:id',async (req,res)=>{
    try {
        const type= await Type.findById(req.params.id)
        type.name=req.body.name
        const t1=await type.save()
        res.json(t1)
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
router.delete('/:id',async (req,res)=>{
    try {
        await Type.findByIdAndDelete(req.params.id)
        res.json("success")
    }
    catch (e) {
        res.send(e);
    }

})

module.exports=router
