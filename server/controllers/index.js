module.exports={
  userController:{
    check:require('./user/check'),
    signup:require('./user/signup'),
    login:require('./user/login'),
    logout:require('./user/logout'),
    info:require('./user/info'),
    password:require('./user/password'),
    mbti:require('./user/mbti'),
    del:require('./user/del')
  },

  postController:{
    post:require('./post')
  },

  commentController:{
    comment:require('./comment')
  },

  genreController:{
    get:require('./genre/get'),
    getMbti:require('./genre/getMbti'),
    getGenre:require('./genre/getGenre')
  }
}