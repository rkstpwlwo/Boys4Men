const router = require('express').Router();
const commentController = require('../controllers/comment');

router.post('/comment/:postId', commentController.comment.post);

router.get('/comment/:postId', commentController.comment.get);


module.exports = router;
