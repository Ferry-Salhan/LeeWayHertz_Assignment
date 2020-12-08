const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const path = require('path');
const imgModel = require('./modals/user');

mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB is connected.."))
.catch((err) => console.log(err));

app.use(cors());

app.use(express.json());
app.use("/auth", require("./routes/user"));

if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("The Server is Running on PORT 5000"));

// pass: HaEPrzr8WdsizguB
// mongodb+srv://ferry_salhan:<password>@cluster0.i64pb.mongodb.net/<dbname>?retryWrites=true&w=majority