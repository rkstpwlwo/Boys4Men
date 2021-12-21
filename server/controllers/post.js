const models = require('../models');

module.exports = {

  post: {
    get: (req, res) => {
      const {category} = req.body;

      if(!category) {
        return res.status(400).send('Bad request');
      } else {
        models.post.get(
            category,
            (error, result) => {
              if (error) {
                res.status(500).send('Internal Server Error');
              } else {
                res.status(200).json(result);
              }
            }
        );
      }
    },

    post: (req, res) => {
      const {userId, userMbti, title, contents} = req.body;

      if(!userId || !userMbti || !title || !contents) {
        return res.status(400).send('Bad request');
      } else {
        models.post.post(
            Number(userId),
            userMbti,
            title,
            contents,
            (error, result) => {
              if (error) {
                res.status(500).send('Internal Server Error');
              } else {
                res.status(201).send('New post inserted.');
              }
             }
            );
      }
    },

    put: (req, res) => {
      const postId = req.params.postId;
      const {title, contents} = req.body;

      if(!postId || !title || !contents) {
        return res.status(400).send('Bad request');
      } else {
        models.post.put(
            Number(postId),
            title,
            contents,
            (error, result) => {
              if (error) {
                res.status(500).send('Internal Server Error');
              } else {
                res.status(200).send('modified');
              }
            }
        );
      }
    },

    delete: (req, res) => {
      const postId = req.params.postId;

      if(!postId) {
        return res.status(400).send('Bad request');
      } else {
        models.post.delete(
            Number(postId),
            (error, result) => {
              if (error) {
                res.status(500).send('Internal Server Error');
              } else {
                res.status(204).send('delete success');
              }
            }
        );
      }
    }


  }
};
