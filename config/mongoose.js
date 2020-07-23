const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/todolist_db");

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to the database'));

db.once('open',()=>{
    console.log('sucessfully connected to the database');
});