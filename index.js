const express = require('express');
const port = 8000;
const path = require('path');


const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static("assets"));


app.listen(port, (err)=>{
    if(err){
        console.log("error in running the server");
    }
    console.log(`server is up and running on port ${port}`);
});
app.get('/',(req,res)=>{
    return res.render('home');
});