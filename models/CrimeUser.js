const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcryptjs = require("bcryptjs");


const CrimeUser = new Schema({
    Name:{
    type:String,
    required:true,
    },
    Pictureurl:{
        required:true,   
        type:String,
        },
    Id:{
        required:true,   
        type:String,
        },
    })
//that will run before (newUsers()).save()
// CrimeUser.methods.comparePassword = function(password){
//     const user = this
//     return bcryptjs.compareSync(password,user.password)
// }

// CrimeUser.pre("save",function(next){
// const user = this;
// const salt = bcryptjs.genSaltSync(10);
// const hash = bcryptjs.hashSync(user.password,salt)
// user.password = hash

// console.log("user.password==>",user.password)
// next()
// })
const CrimeUsr = mongoose.model('CrimeUser',CrimeUser)
module.exports= CrimeUsr;