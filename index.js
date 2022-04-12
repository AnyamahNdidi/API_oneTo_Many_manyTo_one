require("./config/db")
const express = require("express")
const myRouter = require("./router/router")
const peopleRouter = require("./router/peopleRouter")
const cors = require("cors")

const app = express()
const  port = 4000

app.get("/", (req, res)=>{
  res.status(200).json({message: "api is working "})
})

app.use(cors({origin:"*"}))
app.use(express.json())
app.use("/api", myRouter)
app.use("/people", peopleRouter)


app.listen(port, ()=>{
  console.log(`this is my ${port}`)
})