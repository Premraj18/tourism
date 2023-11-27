const express = require("express")
const mongoose=require("mongoose")
const cors = require("cors")
const collection = require("./mongo")

require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

app.post("/login", (req,res) => {
    const {email,password} = req.body;
    collection.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        } else{
            res.json("no record existed")
        }
    })
})

app.post('/register', async (req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check= await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }
})


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

app.listen(process.env.PORT,()=>{
    console.log("port connected");
})

