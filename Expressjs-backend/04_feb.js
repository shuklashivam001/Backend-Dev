const express = require('express');
const app = express();

app.use(express.json());

const users =   {
       1:{name:"Shivam Shukla",age:"19"},
    2:{name:"Abhay",age:"21"}
};

app.put("/changeAge",(req,res)=>{
    const { id,age } = req.body;
    console.log(id);
    console.log(typeof(id));
    if (!id || !users[id]) return res.status(404).json({"message":"User not available"});

    const user = users[id];
    console.log(user);
    user.age = age;
    return res.status(201).json({"message":"Changed the age!!"});
})

app.get("/getUser/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id);
    console.log(typeof(id));

    if(!id || !users[id]) return res.status(404).json({"message":"User not found"});
    
    return res.json(users[id]);
})


app.listen(4000,()=>{
    console.log("Server..");
}); 