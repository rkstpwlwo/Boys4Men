const models = require('../models');

module.exports = {
    comment: {
        get: (req, res) => {
            const {userId, content, created_at} = req.body;


            console.log("comment!!!!!!!");


            if(!userId || !content || !created_at) {
                return res.status(400).send('Bad request');
            } else {
                models.comment.get(
                    userId,
                    content,
                    created_at,
                    (error, result) => {
                        if(error) {
                            res.status(500).send('Internal Server Error');
                        } else {
                            res.status(200).json(result);
                        }
                    }
                );
            }
        },

        post: (req, res) => {
            const {userId, content, postId} = req.body;

            if(!content) {
                return res.status(400).send('Bad request');
            } else {
                models.comment.post(
                    content,
                    (error, result) => {
                        if(error) {
                            res.status(500).send('Internal Server Error');
                        } else {
                            res.status(201).send('Created');
                        }
                    }
                );
            }
        },
    }
};
