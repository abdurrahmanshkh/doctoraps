const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");

//dotenv config
dotenv.config();

//rest object
const app = express();

//midddlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.get('/',(req,res) =>{
    res.status(200).send({
        message: 'Server is running', 
    });
}); 

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} mode on port ${port}`.yellow);
});
 