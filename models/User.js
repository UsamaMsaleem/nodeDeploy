const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcryptjs = require("bcryptjs");


const UserSchema = new Schema({
    name: String,
    email:{
    type:String,
    required:true,
    unique:true
    },
    password:{
        required:true,   
        type:String,
        },
    address :String,
    age:Number,
    frienIds:Array
})
//that will run before (newUsers()).save()
UserSchema.methods.comparePassword = function(password){
    const user = this
    return bcryptjs.compareSync(password,user.password)
}

UserSchema.pre("save",function(next){
const user = this;
const salt = bcryptjs.genSaltSync(10);
const hash = bcryptjs.hashSync(user.password,salt)
user.password = hash

console.log("user.password==>",user.password)
next()
})
const Users = mongoose.model('Users',UserSchema)
module.exports= Users;