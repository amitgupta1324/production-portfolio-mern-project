// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// //dotenv configuartion
// dotenv.config();

// //rest object
// const app = express();

// //middlewares
// app.use(cors());
// app.use(express.json());

// //routes
// app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// //port
// const PORT = process.env.PORT || 8080;

// //listen
// app.listen(PORT, () => {
// console.log(`Server Running On PORT ${PORT} `);
// });



const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path')

// dotenv configuration
dotenv.config();

// Rest object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());



//static files access

app.use(express.static(path.join(__dirname,'./client/build')))

// Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));


app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
