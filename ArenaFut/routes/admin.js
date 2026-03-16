var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Adm ' });
});

//subrota 1
router.get('/esportes', function(req, res, next) {
  res.render('index', { title: 'Esportes ' });
});

//subrota 2
router.get('/usuarios', function(req, res, next) {
  res.render('index', { title: 'Usuários ' });
});

module.exports = router;