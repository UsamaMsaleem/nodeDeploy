const express = require('express')
const router = express.Router()


router.use('/users',require('./users'))
router.use('/posts',require('./posts'))
router.use('/Ques',require('./Ques'))
router.use('/Crime',require('./Crime'))


module.exports=router;