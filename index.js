console.clear();
console.log("--------------------------");
const express = require("express");
const app = express();
const PORT= 8080;


app.get("/camisa",(req, res)=>{
    res.status(200)//a status senn to the client status betwenn 200-299
    //means ok
        .send({//send a data in this case a js object by default
            //the client will recive an json file
            color:"red",
            size:"G"
        });
});

//make the express POSTs with json filea
app.use(express.json());

//the :id is a parameter
app.post("camisa/:id",(req, res)=>{

    //save the value pass in the url
    const {id}= req.params;

    //went access a post route the user will also send info
    //this info is save in somte that we call body (the body of the message)

    //the commad used:
    //
    const {logo} = req.body;

    if(!logo){
        res.status(418)//>400 means error
            .send({message:"we need a logo"});
    }

    res.send({
        camisa:`camisa de id =${id} com o logo ${logo} ` 
    });
});



app.listen(PORT,
           ()=> console.log("conectado"));

console.log("\n");

