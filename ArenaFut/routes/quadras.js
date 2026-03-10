var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Você está em Quadras' });
});

router.get('/agendamentos', function(req, res, next) {
  res.render('agendamentos', { title: 'Você está em Agendamentos' });
});

module.exports = router;