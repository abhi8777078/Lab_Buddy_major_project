const express = require('express')
const app = express();
const morgan = require('morgan')
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();
const PORT=process.env.PORT

//mongodb connection
connectDB();
// middleware 
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// route for auth admin 
app.use('/api/v1/auth', require("./routes/auth"))

// route for auth faculty
app.use('/api/v1/auth/faculty',require("./routes/faculty"))

// route for auth student
app.use('/api/v1/auth/student',require("./routes/student"))

app.listen(PORT, (req, res) => {
    console.log(`Server is running in PORT ${PORT}`)
})