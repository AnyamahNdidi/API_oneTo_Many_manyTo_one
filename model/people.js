const mongoose = require('mongoose')


const peopleSchema = mongoose.Schema({

  name:{
    type:String,
    require:true
  },
  course:{
    type:String,
    require:true
  },
  person:[
    {
         type:mongoose.Schema.Types.ObjectId,
    ref:"fruits"
    }
    
  ]
   
  

},
{timestamps:true}
)

module.exports = mongoose.model("personalColections", peopleSchema)