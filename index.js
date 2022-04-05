require("./config/db")
const express = require("express")
const myRouter = require("./router/router")
const cors = require("cors")

const app = express()
const  port = 4000

app.get("/", (req, res)=>{
  res.status(200).json({message: "api is working "})
})

app.use(cors({origin:"*"}))
app.use(express.json())
app.use("/api", myRouter)


app.listen(port, ()=>{
  console.log(`this is my ${port}`)
})