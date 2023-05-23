const credential = {
    email: "johndoe@gmail.com",
    password: "johndoe123"
  };
  
  const fakeusers = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' }
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
  
  // Dashboard controller
  const dashboard = (req, res) => {
    if (req.session.user) {
      res.render('dashboard', { user: req.session.user, users: fakeusers });
    } else {
      res.send("Unauthorized User");
    }
  };
  
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
  