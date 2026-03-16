var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('melhor', { title: 'Aqui você encontra a melhor biblioteca ' });
});

//subrota 1
router.get('/livros', function(req, res, next) {
  res.render('index', { title: 'Aqui você encontra os melhores livros ' });
});

//subrota 2
router.get('/autores', function(req, res, next) {
  res.render('index', { title: 'Aqui você encontra os melhores autores ' });
});

module.exports = router;
