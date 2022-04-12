const express = require('express')

const router = express.Router()

const {creatFruit,getAllFrsuit,updateFrsuit, deleteFrsuit} = require("../controller/controller")

router.post("/:personId/fruits", creatFruit)


module.exports = router