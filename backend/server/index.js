const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require("cors")
const List2 = require('./models/userSchema')
app.use(cors())
app.use(express.json())
dotenv.config({ path:'../config.env'})
const port = process.env.PORT || 3020;
require('./db/conn')



app.delete('/api/delete', async (req,res) =>{
  try {
    const result = await List2.deleteMany({});
    res.json({ status:"ok", result: result })
  }catch(err) {
    res.json({ status: err });
  }
})



const getList = async (req,res) => {
  try {
    result = await List2
      // .find({name:{$in:["anshu","ankit"]},number:{$gt:21}})
      // .find({$or:[{name:"anshu"},{number:{$gt:21}}]})
      .find({  })
      res.json({ result: result })
  }catch(err){
      res.json({ status: 'error' })
  }
}
app.post('/api/register', async (req, res) => {
    var d = new Date();
    var n = d.toLocaleTimeString();
    // console.log(n);
  
    try {
        const user = await List2.create({
         
            name: req.body.name,
            massage: req.body.massage,
            time:n

        })
        result = await List2
          // .find({name:{$in:["anshu","ankit"]},number:{$gt:21}})
          // .find({$or:[{name:"anshu"},{number:{$gt:21}}]})
          .find({});
        res.json({ status: "ok" ,result:result});
    } catch(err) {
        res.json({ status: 'error' })
    }
    
})

app.get('/api/read', async (req,res) =>{
  try{
 result = await List2
   .find({});
 res.json({ status: "ok", result: result });
  }catch{
    res.json({ status: "error" });
  }
})

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
  console.log(`connection is setup at http://localhost:${port}`);
});