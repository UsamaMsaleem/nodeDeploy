const express = require('express')
const router = express.Router()
const Users = require('../models/User')

// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded());
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:true}))
// Parse JSON bodies (as sent by API clients)
router.use(express.json());
// body parser
router.get('/userid', function(request, response) {
    var id = request.query.id;
   // response.end("received ID is: " + id);
   response.send({
    
    users:[],
        message:"GET chl raha hai"+" "+id
})
});


router.get('/getAll',(req,res)=>{
    res.send({
        users:[],
        message:"GET chl raha hai"
    })
})

// router.get('/getAll',(req,res)=>{
//     res.send({
//         users:[],
//         message:"GET chl raha hai"
//     })
// })


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

router.post('/fbPost', function(req, res){
    console.log(req.body.user.name);
    console.log(req.body.user.email);
});

router.post('/addUser', function(req, res){
const body = req.body;
const newUser = new Users(body)

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
router.post('/login',async(req,res)=>{
    const email = req.body.email;
    if(!user){
        res.send({message:"invalid email password"})
    }
    // db.collection.find({ $text: { $search: "dog cat" } })
// Users.createIndex({"email":"text"})    
      const users = await Users.findOne({email:userInfo.email})
const MatchPassword = user.comparePassword(userInfo.password)

if(!MatchPassword){
    res.send({message:"invalid email password"})
}

      user.then((userObj) => {
          console.log("all users=>>>",allusers)
        res.send({result:allusers})
    
      }).catch(e =>{
          res.send({message:e.message});
      })
      
    })
router.post('/getAll1',(req,res)=>{
    const email = req.body.email;
    // db.collection.find({ $text: { $search: "dog cat" } })
// Users.createIndex({"email":"text"})    
      const users = Users.find({$text:{$search:email}})

      users.then((allusers) => {
        res.send({result:allusers})
    
      }).catch(e =>{
          res.send({message:e.message});
      })
      
    })
    // router.post('/getAll1',(req,res)=>{
    //     const email = req.body.email;
    //     // db.collection.find({  $search: "dog cat"  })
    //       const users = Users.find({$text:{email:email}})
    //       users.then((allusers) => {
    //         res.send({result:allusers})
        
    //       }).catch(e =>{
    //           res.send({message:e.message});
    //       })
          
    //     })
    
// router.post('/getAll1',(req,res)=>{
// const email = req.body.email;
// // db.collection.find({ $text: { $search: "dog cat" } })
//   const users = Users.find({email:email})
//   users.then((allusers) => {
//     res.send({result:allusers})

//   }).catch(e =>{
//       res.send({message:e.message});
//   })
  
// })
// db.scores.count({'marks':{$in: [20,21,22,23,24,25,26,27,28,29,30]}})

router.post('/FindByName',(req,res)=>{
    const name = req.body.name;
      const users = Users.find({age:{$gte:4,$lte:15}})
      users.then((allusers) => {
        res.send({result:allusers})
    
      }).catch(e =>{
          res.send({message:e.message});
      })
      
    })


module.exports=router;

// fetch("/users/addUser",{
//     method:'Post',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({name:"Hamad",email:"Hamad@hotmail.com"})
// }).then(res => res.json())
// .then(res=>console.log(res))

// var arry = [-2,-3,-4,-10];
// function  acd(){
//   var highVal = 0;
// for(var i=0; i <arry.length-1; i++){
//   for(x=0; x< arry.length ; x++){
//    if(arry[x] > arry[x+1] ){ 
//     highVal = arry[x];
//    }
//    else{
//     highVal = arry[x+1];
//    }
//  }
// }
// return highVal;
// }
// const asd = acd();
// console.log(aasd);