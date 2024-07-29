const connectToMongo = require("./db")
const express = require("express")
const User = require("./models/User")

connectToMongo();
const app = express();
const port = 3000;

app.use(express.json())
app.get("/", (req,res)=>{
    res.send("welcome page")
})

app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))
// let curd = async()=>{
//     const data = await User.find()
//     console.log(data)
// }
// curd()

app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})