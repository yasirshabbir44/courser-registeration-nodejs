
// Bring in the User Registration function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
} = require("../controllers/auth.controller");





module.exports = function(app) {

  var auth = require('../controllers/auth.controller');

// Users Registeration Route
  app.post('/signup',auth.userRegister);

// Admin Registration Route
   app.post('/signup-admin',auth.userAdminRegister);

// Users Login Route
   app.post('/login',auth.userLogin);

   // Admin Login Route
   app.post('/login-admin',auth.userAdminLogin);
}