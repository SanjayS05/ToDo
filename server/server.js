const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
let db=[
  {
    task:"Do Laundry",
    status:"Incomplete"
  },
  {
    task:"Do Dishes",
    status:"Incomplete"
  },
  {
    task:"Do Homework",
    status:"Incomplete"
  }
]

app.post("/api/create",(req,res)=>{
  const obj = req.body;
  console.log(obj);
  db.push(obj);
  console.log(db);
  res.status(201).json({data:db})
})

app.put("/api/update",(req,res)=>{
  const obj = req.body;
  console.log(obj);
  for(let i=0;i<db.length;i++){
    console.log(db[i]);
    if(db[i].task==obj.task)
    {
      db[i].status="complete";
      console.log(db);
      res.status(200).json({data:db})
    }
  }
})
app.listen(8000,()=>{
  console.log(db);
})