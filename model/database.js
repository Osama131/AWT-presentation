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
        app.listen(3306, () => {
            console.log('Server started on port 3306'); 
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });



const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
  

const UserModel = mongoose.model('User', userSchema);
  

const fakeUsers = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' }
];
  

UserModel.countDocuments()
  .then(count => {
    if (count === 0) {
      return UserModel.insertMany(fakeUsers);
    }
    return Promise.resolve(); // Resolve the promise if users already exist
  })
  .then(() => {
    console.log('Fake users inserted successfully.');
  })
  .catch(err => {
    console.log(err);
  });


module.exports = UserModel;
