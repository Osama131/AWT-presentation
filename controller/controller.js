// const UserModel = require('../model/database');

const credential = {
email: "johndoe@gmail.com",
password: "johndoe123"
};
  
const fakeusers = [
{ name: 'John Doe', email: 'john@example.com' },
{ name: 'Jane Smith', email: 'jane@example.com' },
{ name: 'Bob Johnson ', email: 'bob@example.com' }
];
  
// Login user controller
const loginUser = (req, res) => {
if (req.body.email == credential.email && req.body.password == credential.password) {
    req.session.user = req.body.email;
    res.redirect('/route/dashboard');
    res.end("Login Successful...!");
} else {
    res.end("Invalid Username");
}
};
  
// Dashboard controller hardcoded
const dashboard = (req, res) => {
if (req.session.user) {
    res.render('dashboard', { user: req.session.user, users: fakeusers });
} else {
    res.send("Unauthorized User");
}
};

// // Dashboard controller using Database User Values
// const dashboard = async (req, res) => {
//     if (req.session.user) {
//       try {
//         const users = await UserModel.find({}).exec();
//         console.log('List of users retrieved from MongoDB')
//         res.render('dashboard', { user: req.session.user, users: users });
//       } catch (err) {
//         console.log(err);
//         res.send("Error");
//       }
//     } else {
//       res.send("Unauthorized User");
//     }
//   };

// Logout controller
const logout = (req, res) => {
req.session.destroy(function (err) {
    if (err) {
    console.log(err);
    res.send("Error");
    } else {
    res.render('index', { title: "Express", logout: "Logout Successful...!" });
    }
});
};
  
module.exports = { loginUser, dashboard, logout };
