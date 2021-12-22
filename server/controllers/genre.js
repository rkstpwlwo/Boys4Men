const models = require('../models');

module.exports = {

  genre: {
    get: (req, res) => {
      const {img, name, mbti} = req.body;

      console.log("genre!!!!!!!");

      if(!img || !name) {
        return res.status(400).send('Bad request');
      }
      else if(mbti) {
        models.genre.get(
            name,
            img,
            description,
            mbti,
            (error,result) => {
              if(error) {
                res.status(500).send('Internal Server Error');
              } else {
                res.status(200).json(result);
              }
            }
        );
      }
      else {
        models.genre.get(
            name,
            img,
            description,
            (error,result) => {
              if(error) {
                res.status(500).send('Internal Server Error');
              } else {
                res.status(200).json(result);
              }
            }
        );
      }
    },

  }

};
