const mongoose = require('mongoose')


const fruitSchema = mongoose.Schema({

  name:{
    type:String,
    require:true
  },
  person:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"personalColections"
  }

},
{timestamps:true}
)

module.exports = mongoose.model("fruits", fruitSchema)