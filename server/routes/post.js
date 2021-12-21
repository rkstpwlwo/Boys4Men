const router = require('express').Router();
const postController = require('../controllers/post');

router.get('/post', postController.post.get);

router.post('/post', postController.post.post);

router.put('/post', postController.post.put);

router.delete('/post', postController.post.delete);


module.exports = router;
