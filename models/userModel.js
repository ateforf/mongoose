const mongoose =require('mongoose')

const userSchema = new mongoose.model({
   name:{
    type:String,
    required:true
   },
   age:{
    type:Number
   },
   favoriteFoods:{
    type:[String]
   }


});
module.exports = mongoose.model('user',userSchema)