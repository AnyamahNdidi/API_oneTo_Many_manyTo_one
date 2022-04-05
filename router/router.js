const express = require('express')

const router = express.Router()

const {creatFruit,getAllFrsuit,updateFrsuit, deleteFrsuit} = require("../controller/controller")

router.post("/post", creatFruit)
router.get("/", getAllFrsuit)
router.patch("/:id",updateFrsuit )
router.delete("/:id",deleteFrsuit )

module.exports = router