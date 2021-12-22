const express = require('express');
const indexRouter = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 80;


const router = express.Router();

const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');
const genreRouter = require('./routes/genre');
const postController = require("./routes/post");


/*
app.get('/*', (req,res,next) => {
  const temp = req.url.split('/');
  const path = temp[1];
  const number = temp[2];

  console.log("req method--->", req.method);
  console.log("req target--->", path);
  console.log("req id -->", number);


  switch (path) {
    case 'post':
      if (req.method === 'get') {
        router.get('/post', postController.post.get);
      } else if (req.method === 'post') {
        router.post('/post', postController.post.post);
      } else if (req.method === 'put') {
        router.put('/post', postController.post.put);
      } else if (req.method === 'delete') {
        router.delete('/post', postController.post.delete);
      }
      break;

    case 'comment':
      router.use('/comment', commentRouter);
      break;
    case 'genre':
      router.use('/genre', genreRouter);
  }//switch
},

 */

  app.use(
      morgan('      :method :url :status :res[content-length] - :response-time ms')
  );
  app.use(cors());
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());

app.use('/', indexRouter);


  module.exports = app.listen(port, () => {
    console.log(`      🚀 Server is starting on ${port}`);
  });


