const router = require('express').Router();
const controller = require('../controllers/genre');

router.get('/post', controller.post.get);
router.post('/post', controller.post.post);
router.delete('/post', controller.post.delete);

module.exports = router;
