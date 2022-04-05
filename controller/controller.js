const fruitSchema = require("../model/model")

const creatFruit = async(req, res)=>{

  const {name, person} = req.body
  try{
    const userData = await fruitSchema.create({
      name,
      person
    })

    res.status(201).json({
      message:"user created",
      data:userData
    })

  }catch(error){
    res.status(400).json({error:error.message})
  }

}

const getAllFrsuit =async (req, res)=>{
   
   try{
    const allFruit = await  fruitSchema.find()
    res.status(200).json({
      message:"all data",
      data:allFruit
    })
   }catch(error){
      res.status(400).json({error:error.message})
   }

}

const updateFrsuit =async (req, res)=>{
   
   const {id} = req.body
   try{
    const editFruit = await  fruitSchema.findByIdAndUpdate(
      id,
      req.body,
      {new:true}
    )
    res.status(200).json({
      message:"edited successfully",
      data:editFruit
    })
   }catch(error){
      res.status(400).json({error:error.message})
   }

}
const deleteFrsuit =async (req, res)=>{
   
   const {id} = req.body
   try{
    const editFruit = await  fruitSchema.findByIdAndDelete( id)
    res.status(200).json({
      message:"deleted  successfully",
   
    })
   }catch(error){
      res.status(400).json({error:error.message})
   }

}

module.exports ={
  creatFruit,
  getAllFrsuit,
  updateFrsuit,
  deleteFrsuit
  
}