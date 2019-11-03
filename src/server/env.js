const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  require('dotenv').config();
}

module.exports = {
  mail_user: process.env.MAIL_USER,
  mail_pass: process.env.MAIL_PASSWORD,
  port: process.env.PORT
};
