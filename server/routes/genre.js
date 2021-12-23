const router = require('express').Router();
const {genreController} = require('../controllers');

router.get('/', genreController.get);
router.get('/mbti/:mbti',genreController.getMbti);
router.get('/:genre',genreController.getGenre);

module.exports = router;
