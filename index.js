const  express =require('express');
const mongoose =require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc')
const cors = require('cors');
const port=process.env.PORT || 4400;
const app=express();
app.use(cors())
app.use(express.json())
 mongoose.connect('mongodb+srv://new_user:JZMJ8BODYPIBJKUx@cluster0.i0wo2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
     ,{useNewUrlParser:true,useUnifiedTopology:true});
const con=mongoose.connection
con.on('open',()=>{
    console.log('connected to the database!')
})

const swaggerOptions = {
    apis: ["./routes/*js"],
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: 'Ikea Store Api',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://ikea-store-api.herokuapp.com/"      ,
            },
        ],
    },


};
let swaggerDocument;
swaggerDocument = swaggerJsDoc(swaggerOptions);
const typesRouter=require('./routes/types');
app.use('/types',typesRouter);
const furnituresRouter=require('./routes/furnitures');
app.use(express.json())
app.use('/furnitures',furnituresRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,{ explorer: true }));





app.listen(port,()=>{
    console.log('connected to server',port);
})


