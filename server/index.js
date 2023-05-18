const express=require('express')
const app=express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port=process.env.PORT || 5050
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()

// middleware
app.use(cors())
app.use(bodyParser.json())



const uri = "mongodb+srv://dbuser11:Kgf8MMbHT1DT4Mwa@cluster0.azyqnnz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {serverApi: {version: ServerApiVersion.v1,strict: true,deprecationErrors: true,}});

async function run() {
  try {
    const database = client.db("folter").collection("data");
    // how to get data
    app.get("/user",async(req,res)=>{
      const query={}
      const cursor = database.find(query);
      const result=await cursor.toArray()
      res.send(result)
    })
    // how to post data
     app.post('/user',async(req,res)=>{
      const data=req.body
      const result = await database.insertOne(data);
      res.send(result)
     })
    //  basic routing  // const query={_id:ObjectId(id)} old age system*********
    app.get("/user/:id",async(req,res)=>{
       const id=req.params.id
      const query={_id:new ObjectId(id)}
      const result = await database.findOne(query);
      res.send(result)
    })
    //  how to delete data
    app.delete('/user/:id',async(req,res)=>{
      const id=req.params.id
      const query={_id:new ObjectId(id)}
      const result = await database.deleteOne(query);
      console.log(result)
      res.send(result)
    })
      // update user
    app.put('/user/:id',async(req,res)=>{
     const id=req.params.id;
     const updateuser=req.body
     console.log(updateuser)
     const filter={_id:new ObjectId(id)}
     const options={upsert:true}
     const updatedoc={
      $set:{
        name:updateuser.name,
        gmail:updateuser.gmail,
      }
     }
     const result=await database.updateOne(filter,updatedoc,options)
     res.send(result)
    })
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/",(req,res)=>{
    res.send("Hello data")
})

app.listen(port,()=>{
    console.log(`Server run successfull ${port}`)
})