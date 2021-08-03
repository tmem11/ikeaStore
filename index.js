const  express =require('express');
const mongoose =require('mongoose');
url='mongodb://localhost/Ikea';
const app=express();
 mongoose.connect(url,{useNewUrlParser:true});
const con=mongoose.connection
con.on('open',()=>{
    console.log('connected to the database!')
})
const typesRouter=require('./routes/types');
app.use(express.json())
app.use('/types',typesRouter);



app.listen(200,()=>{
    console.log('connected to server');
})


