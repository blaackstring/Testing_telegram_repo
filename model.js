const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
  userid:{
    type:String,
    required:true,
    unique:true
  },
  sem:{
    type:String,
    required:true
  }
})
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports={User}