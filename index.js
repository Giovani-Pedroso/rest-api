console.clear();
console.log("--------------------------");
const express = require("express");
const app = express();
const PORT= 8080;


//curl is a commando for test rest apis

//curl "ulr of the website"c 1

//will recive the information of a website a.k.a
//GET Request

//curl -i "ulr of the website"
//will return with the header usefull went work with
//apis

//curl

app.listen(PORT,
           ()=> console.log("conectado"));

console.log("\n");

