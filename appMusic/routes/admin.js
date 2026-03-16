var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Música' });
});

//subrota 1
router.get('/genero', function(req, res, next) {
  res.render('index', { title: 'Gêneros de Músicas' });
});

//subrota 2
router.get('/artista', function(req, res, next) {
  res.render('index', { title: 'Conheça os Artistas' });
});
module.exports = router;
