const express = require('express')

const router = express.Router()

const { createPeople, findaAll} = require("../controller/peopleController")

router.post("/", createPeople)
router.get("/", findaAll)

module.exports = router