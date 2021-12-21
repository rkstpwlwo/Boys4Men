const router = require('express').Router();
const controller = require('../controllers');


router.get('/genre', controller.genre.get);
router.get('/genre/mbti/:mbti', controller.genre.mbti.get);
router.get('/genre/:genre', controller.genre.get);


module.exports = router;
