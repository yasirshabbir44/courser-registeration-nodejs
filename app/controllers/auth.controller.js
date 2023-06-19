
const passport = require("../middlewares/passport");
const register = require("./register/register");
const login = require("./login/login");
const { ROLE } = require("../config/roles");



exports.userRegister =  (userRequest, res) => register(userRequest, ROLE.user, res);;
exports.userAdminRegister =  (userRequest, res) => register(userRequest, ROLE.admin, res);;
exports.userLogin =  (userRequest, res) => login(userRequest, ROLE.user, res);
exports.userAdminLogin =  (userRequest, res) => login(userRequest, ROLE.admin, res);


/**
 * Checks if the provided user role is included in the roles list
 * @param {Array} roles - list of accepted roles.
 * @const checkRole
 */
const checkRole = (roles) => (req, res, next) => {
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();
};

/**
 * returns json of user data.
 * @const serializeUser
 */
const serializeUser = (user) => {
  return {
    username: user.username,
    email: user.email,
    name: user.name,
    updatedAt: user.updatedAt,
    createdAt: user.createdAt,
  };
};