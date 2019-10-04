// console.log("helloworld")
const express = require('express');
const app = express();
const mongoose =require('./Config/db')
const db = mongoose.connection
const port =process.env.PORT || 3001;

db.once('open',()=>{
    console.log('db connected')
})
app.listen(port, () => {
    console.log("server is listening")
})
.on("error",error => {
    console.log("error",error)
})

// app.get('/',(req,res)=>{
//     console.log("helloworld2")
// })

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