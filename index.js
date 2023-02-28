const express = require('express');
const ejs = require('ejs');
const app = express();

const timeMiddleware = (req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();
  
    if (dayOfWeek === 0 || dayOfWeek === 6 || hour < 9 || hour >= 17) {
      res.render('closed');
    } else {
      next();
    }
  };

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(timeMiddleware);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});