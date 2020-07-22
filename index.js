const express = require('express');
const port = 8000;


const app = express();


app.listen(port, (err)=>{
    if(err){
        console.log("error in running the server");
    }
    console.log(`server is up and running on port ${port}`);
});