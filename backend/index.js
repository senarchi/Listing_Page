const express=require('express');
const mongoose= require('mongoose');
const users=require('./list');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://ListingProject:ArchiSen@project2.aoespbs.mongodb.net/Listing?retryWrites=true&w=majority",{
    useNewUrlParser:true,useUnifiedTopology:true
})

users.find({},function(err,users){
    if(err){
        console.log(err)
    }
    else{
        console.log(users)
    }
})

// app.get('/',(req,res)=>{
//     res.send('Home Page')
// })

app.get('/api',(req,res)=>{
    users.find().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`${PORT} running`)
})
