const sequelize = require("../config/db");
const Admin = require("./Admin");
const Course = require("./Course");
const Registration = require("./Registration");
const ContactMessage = require("./ContactMessage");

Course.hasMany(Registration);
Registration.belongsTo(Course);

module.exports = {
  Admin,
  Course,
  ContactMessage,
  Registration,
  sequelize,
};
