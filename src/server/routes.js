const {Router} = require('express');
const nodemailer = require('nodemailer');
const {mail_user, mail_pass} = require('./env');

const router = Router();

router.post('/sendmail', (req, res) => {
  try {
    const {body} = req;
    const transport = nodemailer.createTransport({
      service: 'Gmail',
      host: 'gmail.com',
      port: 25,
      secure: false,
      auth: {
        user: mail_user,
        pass: mail_pass
      }
    });
    transport.sendMail(body).then((details) => {
      res.status(200).json({
        statusCode: 200,
        body: details
      });
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      body: error
    });
  }
});

module.exports = router;
