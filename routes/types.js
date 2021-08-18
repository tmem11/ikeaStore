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
/**
 * @swagger
 * /types/{id}:
 *   get:
 *     summary: Get the types by id
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The type id
 *     responses:
 *       200:
 *         description: The type description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Type'
 *       404:
 *         description: The type was not found
 */

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

/**
 * @swagger
 * /types/{id}:
 *  put:
 *    summary: Update the type by the id
 *    tags: [Types]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The type id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Type'
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
        const type= await Type.findById(req.params.id)
        type.name=req.body.name
        type.id=req.params.id
        const t1=await type.save()
        res.json(t1)
    }
    catch (e) {
        res.send(e);
    }

})
/**
 * @swagger
 * /types:
 *   post:
 *     summary: Create a new types
 *     tags: [Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       200:
 *         description: The type was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Type'
 *       500:
 *         description: Some server error
 */

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
/**
 * @swagger
 * /types/{id}:
 *   delete:
 *     summary: Remove the type by id
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The type id
 *
 *     responses:
 *       200:
 *         description: The type was deleted
 *       404:
 *         description: The type was not found
 */
router.delete('/:id',async (req,res)=>{
    try {
        await Type.findByIdAndDelete(req.params.id)
        res.json("type was delet")
    }
    catch (e) {
        res.send(e);
    }

})

module.exports=router
