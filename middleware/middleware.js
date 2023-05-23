// Middleware to check if user is logged in
const checkAuth = (req, res, next) => {
    if (req.session.user) {
      next(); // User is logged in, proceed to the next middleware or route handler
    } else {
      res.send("Unauthorized User");
    }
  };
  
module.exports = { checkAuth };
  