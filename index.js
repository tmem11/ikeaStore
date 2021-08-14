const  express =require('express');
const mongoose =require('mongoose');
//mongodb+srv://new_user:<password>@cluster0.i0wo2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//JZMJ8BODYPIBJKUx

url='mongodb://localhost/Ikea'||process.env.MONGODB_URI;
const port=process.env.PORT || 3000;
const app=express();
 mongoose.connect('mongodb+srv://new_user:JZMJ8BODYPIBJKUx@cluster0.i0wo2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
     ,{useNewUrlParser:true,useUnifiedTopology:true});
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
    console.log('connected to server',port);
})


