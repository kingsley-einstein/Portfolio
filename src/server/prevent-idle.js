const http = require('http');

module.exports = () => {
  setInterval(() => {
    http.get({host: 'https://dev-kingsley.herokuapp.com', path: '/'}, (res) => {
      res.on('data', () => {
        console.log('Data Received');
      });
    }).on('error', (err) => {
      console.log('Error occured', err);
    });
  }, 10 * 60 * 1000);
};
