const router = require('express').Router();
const genreController = require('../controllers/genre');

router.get('/genre', genreController.genre.get);

module.exports = router;
