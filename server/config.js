const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  JWT_SECRET : process.env.JWT_SECRET,
  DB : process.env.JWT_SECRET.DB,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD
};