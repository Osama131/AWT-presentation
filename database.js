const express = require("express");
const app = express();
const mongoose = require("mongoose");



// Replace with your MongoDB connection URL
const mongoURI = 'mongodb+srv://ahmedelamry12580:HPyoqLbfEOB3gkli@cluster0.nyvnyyd.mongodb.net/'; 

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server started on port 3000'); 
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });


const userSchema = new mongoose.Schema({    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;

const usersData = [
    { name: 'John Doe', email: 'john@example.com', age: 25 , password:'aa'},
    { name: 'Jane Smith', email: 'jane@example.com', age: 30 ,password:'bb'},
    { name: 'Bob Johnson', email: 'bob@example.com', age: 35 ,password:'bb'}
    ];


// Save the users to the database .. (list of users)
User.insertMany(usersData)
    .then(() => {
        console.log('User created successfully');
    })
    .catch((err) => {
        console.error('Error creating user', err);
    });



