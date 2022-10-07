const mongoose=require('mongoose');
let userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    User:String,
    Name:String,
    Date:String,
    changes:String
},{collection:'scores'});

module.exports=mongoose.model('list',userSchema)