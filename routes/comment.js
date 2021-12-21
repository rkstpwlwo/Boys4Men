const router = require('express').Router();
const controller = require('../controllers');

router.get('/comment/:postId', controller.comment.get);
router.post('/comment/:postId', controller.comment.post);

module.exports = router;
