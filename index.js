const  express =require('express');
const mongoose =require('mongoose');
url='mongodb://localhost/Ikea';
const port=process.env.PORT ||5000
const app=express();
 mongoose.connect(url,{useNewUrlParser:true});
const con=mongoose.connection
con.on('open',()=>{
    console.log('connected to the database!')
})
const typesRouter=require('./routes/types');
app.use(express.json())
app.use('/types',typesRouter);
const furnituresRouter=require('./routes/furnitures');
app.use(express.json())
app.use('/furnitures',furnituresRouter);



app.listen(port,()=>{
    console.log('connected to server');
})


