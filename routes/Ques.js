const express = require('express')
const router = express.Router()
const Questions = require('../models/Questions')

router.post('/addQues', function(req, res){
    const body = req.body;
    const newQues = new Questions(body)
    
    newQues.save()
    .then(()=>{
        res.send({message:"Questions ADDED SUCCESSS"})
    })
    .catch(e =>{
        console.log("e===>",e)
        res.send({message:e.message})
    
    })
    //  console.log(users,"users agaya")
     console.log(req.body);
    });

    router.get('/GetAllQues',(req,res)=>{
       // const email = req.body.email;
        // db.collection.find({  $search: "dog cat"  })
          const users = Questions.find({})
          users.then((allusers) => {
            res.send({result:allusers})
            console.log(res)
        
          }).catch(e =>{
              res.send({message:e.message});
          })
          
        })



module.exports=router;
