const express = require('express');
const router = express.Router();
const postRouter = require('./post');
const commentRouter = require('./comment');
const genreRouter = require('./genre');

router.use('/post', postRouter);
router.use('/comment', commentRouter);
router.use('/genre', genreRouter);

module.exports = router;
