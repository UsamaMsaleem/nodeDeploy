const express = require('express')
const router = express.Router()

router.get('/getAll',(req,res)=>{
    res.send({
        users:[],
        message:" post chl raha hai"
    })
})
router.put('/putAll',(req,res)=>{
    res.send({
        users:[],
        message:"put chl raha hai"
    })
})
router.delete('/deleteAll',(req,res)=>{
    res.send({
        users:[],
        message:"delete chl raha hai"
    })
})
router.post('/postAll',(req,res)=>{
    res.send({
        users:[],
        message:"post chl raha hai"
    })
})
module.exports=router;


// fectch k through body bhejne ka tariqa using post method 
// fetch("https://localhost:3001/getdata",{
//     method:'Post',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({name:"usama"})
// }).then(res => res.json())
// .then(res=>console.log(res))