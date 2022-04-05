const mongoose = require('mongoose')
const url = "mongodb://localhost/relationship"

mongoose.connect(url).then((result) => {
  console.log("connect successfully database")
}).catch((err) => {
  console.log("something is wrong")
});

