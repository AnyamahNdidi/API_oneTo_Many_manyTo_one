const { use } = require("express/lib/router")
const fruitSchema = require("../model/model")
const peopleModel = require("../model/people")

const creatFruit = async(req, res)=>{

   
  try{
    const id = req.params.personId

    const user = await peopleModel.findById(id)
    const myFruits = new fruitSchema(req.body)

    myFruits.person = user
    myFruits.save()

    user.person.push(myFruits)
    user.save()

    res.status(201).json({
      data:myFruits
    })

  }catch(error){
    res.status(400).json({error:error.message})
  }

}





module.exports ={
  creatFruit,
 
  
}