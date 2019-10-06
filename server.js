// console.log("helloworld")
const express = require('express');
const app = express();
const mongoose =require('./Config/db')
var cors = require('cors')
const db = mongoose.connection
const port =process.env.PORT || 3001;
// var cors = require('cors')

db.once('open',()=>{
    console.log('db connected')
})
app.listen(port, () => {
    console.log("server is listening")
})
.on("error",error => {
    console.log("error",error)
})
// app.use(cors({
//     origin: 'http://localhost',
//     allowedHeaders: ["Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"]
// }));

// app.options('*', cors())

app.use(cors())
// app.get('/',(req,res)=>{
//     console.log("helloworld2")
// })
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  });

app.get('/GetAllFriends',(req,res)=>{
    // console.log("helloworld2")

    res.send({
        users:[],
        message:"han larkai"
    })
    // console.log(res)
})

app.post('/PostAllFriends',(req,res)=>{
    // console.log("helloworld2")

    res.send({
        users:[],
        message:"han larkai"
    })
    // console.log(res)
})
// fetch('users/putAll', {
//     method: 'PUT',
//    }).then(res=>res.json())
//     .then(res => console.log(res))

app.use('/', require('./routes/index.js'))