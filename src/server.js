const express = require('express');
const hbs = require("hbs");
const app = express();
const routes = require('./routes/main')
const mongoose = require("mongoose")
const DB = 'mongodb+srv://ketanthakurr:<Ketan@2003>@cluster0.bhf2k3h.mongodb.net/Subscribe?retryWrites=true&w=majority'
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")
app.use('/static', express.static("public"))
app.use('', routes)


mongoose.connect(DB, {
    userNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => { 
    console.log('Connect Successfull');
}).catch((err) => console.log('No Connection'));


// mongoose.connect("mongodb://localhost:27017/ThreeTicketPlease", () => {
//     console.log("database connected")
// })
app.listen(process.env.PORT | 6969, () => {
    console.log("server started")
})