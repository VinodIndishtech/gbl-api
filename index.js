const express = require("express");
const app = express();
const portNumber = 8080;

app.listen(portNumber, ()=>{
    console.log(`server started on port ${portNumber}`)
})