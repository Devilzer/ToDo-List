const express = require('express');
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');
const Todo = require('./models/todo');


const app = express();

//setting up views
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static("assets"));

//adding task
app.post('/add_todo',(req,res) =>{
    Todo.create({
        description: req.body.todo,
        category: req.body.category,
        duedate: req.body.date
    },(err,newTodo)=>{
        if(err){
            console.log("error in creating todo");
            return;
        }
        console.log("*>>",newTodo);
        return res.redirect("/");
    });
});

//deleting tasks
app.get('/delete_todo/:id',(req,res)=>{
    let id = req.params.id;
    Todo.findByIdAndDelete(id,(err)=>{
        if(err){
            console.log("error in deleting task");
            return;
        }
        return res.redirect("/");
    });
});


//updating the home page
app.get('/',(req,res)=>{
    Todo.find({},(err,todo)=>{
        if(err){
            console.log("error in adding fetching task");
        }
        return res.render('home',{
            todo_list : todo
        });
    });
});


//starting the server
app.listen(port, (err)=>{
    if(err){
        console.log("error in running the server");
    }
    console.log(`server is up and running on port ${port}`);
});
