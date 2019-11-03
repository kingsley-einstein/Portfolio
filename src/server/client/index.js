const {Router} = require('express');
const path = require('path');

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/views/about.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/views/contact.html'));
});

router.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/views/projects.html'));
});

router.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/views/resume.html'));
});

router.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/views/main.html'));
});

module.exports = router;
