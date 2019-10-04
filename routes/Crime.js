const express = require('express')
const router = express.Router()
const CrimeUser = require('../models/CrimeUser')

// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded());
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:true}))
// Parse JSON bodies (as sent by API clients)
router.use(express.json());
// body parser



router.post('/CrimeUserAdd', function(req, res){
const body = req.body;
const newUser = new CrimeUser(body)

newUser.save()
.then(()=>{
    res.send({message:"USER ADDED SUCCESSS"})
})
.catch(e =>{
    console.log("e===>",e)
    res.send({message:e.message})

})
// console.log(users,"users agaya")
    // console.log(req.body.user.email);
});



module.exports=router;
// http://localhost:3001/Crime/CrimeUserAdd

// fetch("/Crime//CrimeUserAdd",{
//     method:'Post',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({Name:"Hamad",Pictureurl:"Hamad@hotmail.com"})
// }).then(res => res.json())
// .then(res=>console.log(res))
