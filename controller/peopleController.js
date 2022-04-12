const peopleSchema = require("../model/people")

const createPeople  =async (req, res)=>{
   try{
     const {name, course, person} = req.body

     const newData = await peopleSchema.create({
       name,
       course,
       person
     })
     res.status(201).json({
       message: "data craeted",
       data:newData
     })

   }catch(error){
     res.status(400).json({error:error.message})
   }
}

const findaAll   = async (req, res)=>{
  try{
    const getAll  = await peopleSchema.find().populate("person")

    res.status(200).json({
      message:"all data",
      data:getAll
    })

  }catch(error){
     res.status(400).json({
       message:error.message
     })
  }
}


module.exports = {
  createPeople,
  findaAll
}