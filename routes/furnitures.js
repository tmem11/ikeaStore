const  express =require('express');
const router=express.Router()
const  Furniture=require('../models/Furniture');

/**
 * @swagger
 * components:
 *   schemas:
 *     Furniture:
 *       type: object
 *       required:
 *         - codeNumber
 *         - types
 *         - measurs
 *         - color
 *         - price
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the furnitures
 *         codeNumber:
 *           type: string
 *           description: The furniture code
 *         types:
 *           type: string
 *           description: The furniture type
 *         measurs:
 *           type: string
 *           description: The furniture width and height
 *         color:
 *           type: string
 *           description: The furniture color
 *         price:
 *           type: Decimal128
 *           description: The furniture price
 *
 *       example:
 *         codeNumber: a11,
 *         types: 011
 *         measurs: 20*34
 *         color: red
 *         price : 100
 *
 *
 */

/**
 * @swagger
 * tags:
 *   name: Furniture
 *   description: The Furniture managing API
 */





/**
 * @swagger
 * /furnitures:
 *   get:
 *     summary: Returns the list of all the Furnitures
 *     tags: [Furniture]
 *     responses:
 *       200:
 *         description: The list of the Furnitures
 *         content:
 *           application/json:
 *             schema:
 *               type: array

 */
router.get('/',async (req,res)=>{
    try {
        const furnitures= await Furniture.find()
        res.json(furnitures)
    }
    catch (e) {
        res.send(e);
    }

})
/**
 * @swagger
 * /furnitures/{id}:
 *   get:
 *     summary: Get the Furniture by id
 *     tags: [Furniture]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Furniture id
 *     responses:
 *       200:
 *         description: The Furniture description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Furniture'
 *       404:
 *         description: The type was not found
 */
router.get('/:id',async (req,res)=>{
    try {
        const furniture= await Furniture.findById(req.params.id)
        res.json(furniture)
    }
    catch (e) {
        res.send(e);
    }

})
/**
 * @swagger
 * /furnitures:
 *   post:
 *     summary: Create a new Furniture
 *     tags: [Furniture]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Furniture'
 *     responses:
 *       200:
 *         description: The Furniture was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Furniture'
 *       500:
 *         description: Some server error
 */

router.post('/' , async (req,res)=>{
    const furniture=new Furniture({
        color:req.body.color,
        types:req.body.types,
        price:req.body.price,
        codeNumber:req.body.codeNumber,
        measurs:req.body.measurs

    })
    try {

            const t1 = await furniture.save()
            res.json(t1)
    }
    catch (e) {
        res.send(e);

    }

})

/**
 * @swagger
 * /furnitures/{id}:
 *   delete:
 *     summary: Remove the Furniture by id
 *     tags: [Furniture]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Furniture id
 *
 *     responses:
 *       200:
 *         description: The Furniture was deleted
 *       404:
 *         description: The Furniture was not found
 */
router.delete('/:id',async (req,res)=>{
    try {
        await Furniture.findByIdAndDelete(req.params.id)
        res.json("furniture was deleted")
    }
    catch (e) {
        res.send(e);
    }


})

/**
 * @swagger
 * /furnitures/{id}:
 *  put:
 *    summary: Update the Furniture by the id
 *    tags: [Furniture]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Furniture id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Furniture'
 *    responses:
 *      200:
 *        description: The type was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Type'
 *      404:
 *        description: The type was not found
 *      500:
 *        description: Some error happened
 */
router.put('/:id',async (req,res)=>{
    try {
        const furniture= await Furniture.findById(req.params.id)
        furniture.color=req.body.color
        furniture.price=req.body.price
        furniture.types=req.body.types
        furniture.measurs=req.body.measurs
        furniture.codeNumber=req.body.codeNumber
        furniture.id=req.params.id
        const t1=await furniture.save()
        res.json(t1)
    }
    catch (e) {
        res.send(e);
    }

})





module.exports=router
