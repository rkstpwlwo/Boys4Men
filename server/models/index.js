const {createConnection,endConnection}=require('./createConnection');

module.exports = {
  user:{
    check:(keyword,searchKey,callback)=>{
      const queryString=`select id,password from User where ${keyword}=?`;
      const connection=createConnection();
      connection.query(queryString,[searchKey],function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
    login:(userInfo,callback)=>{
      const queryString='select userId,mbti,name from User where userId=? and password=?';
      const connection=createConnection();
      connection.query(queryString,[userInfo.id,userInfo.password],function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
    signup:(newUser,callback)=>{
      const queryString='insert into User(userId,password,name,city) values (?,?,?,?)';
      const connection=createConnection();
      connection.query(queryString,[newUser.id,newUser.password,newUser.name,newUser.city],function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
    getInfo:(userInfo,callback)=>{
      const queryString='select userId,name,city,mbti from User where userId=?';
      const connection=createConnection();
      connection.query(queryString,[userInfo.id],function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
    patchInfo:(userInfo,newInfo,callback)=>{
      const queryString='update user set name=?,city=? where userId=?';
      const connection=createConnection();
      connection.query(queryString,[newInfo.name,newInfo.city,userInfo.id],function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
    deleteUser:(userInfo,callback)=>{
      const queryString='delete from user where userId=?';
      const connection=createConnection();
      connection.query(queryString,[userInfo.id],function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
    patchPassword:(userInfo,newPassword,callback)=>{
      const queryString='update user set password=? where userId=?';
      const connection=createConnection();
      connection.query(queryString,[newPassword,userInfo.id],function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
    saveMbti:(userInfo,mbti,callback)=>{
      const queryString='update user set mbti=? where userId=?';
      const connection=createConnection();
      connection.query(queryString,[mbti,userInfo.id],function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    }
  },

  post:{
    get:(category,callback)=>{
      const queryString=`select userId,userMbti,title,contents from Post where userMbti=category`;
      const connection=createConnection();
      connection.query(queryString,function(err,result){
        callback(err,result);
      });
      endConnection(connection);
    },
    post:(userId, userMbti,title,contents,callback)=>{
      const queryString=`insert into Post (userId, userMbti,title,contents) values(?,?,?,?)`;
      const connection=createConnection();
      connection.query(queryString,function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
    put:(postId,title,contents,callback)=>{
      const queryString=`update Post set Post.title=title,Post.contents=contents where Post.id=postId`;
      const connection=createConnection();
      connection.query(queryString,function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
    delete:(postId,callback)=>{
      const queryString=`delete from Post where post.id=postId`;
      const connection=createConnection();
      connection.query(queryString,function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    }
  },
  comment:{
    get:(userId, content, created_at, callback)=>{
      const queryString=`select userId,content,created_at from Comment where comment.userId=userId`;
      const connection=createConnection();
      connection.query(queryString,function(err,result){
        callback(err,result);
      });
      endConnection(connection);
    },
    post:(userId, content, postId, callback)=>{
      const queryString=`insert into Comment (userId,content, postId) values(?,?,?)`;
      const connection=createConnection();
      connection.query(queryString,function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
  },
  genre:{
    get:(callback)=>{
      const queryString='select name,img from genre';
      const connection=createConnection();
      connection.query(queryString,function(err,result){
        callback(err,result);
      })
      endConnection(connection);
    },
    getGenre:(genreName,callback)=>{
      const queryString=`select song.artist,song.name,genre.img,genre.description from song,genre 
                          where genre.id=song.genreId and genre.name=?`;
      const connection=createConnection();
      connection.query(queryString,[genreName],function(err,result){
        callback(err,result);
      });
      endConnection(connection);
    },
    getMbti:(mbti,callback)=>{
      const queryString=`select song.name,song.artist,genre.name as genreName from song,genre 
                        where song.genreId=genre.id
                        and song.genreId in (select genreId from genre_mbti where mbti=?)`
      const connection=createConnection();
      connection.query(queryString,[mbti],function(err,result){
        callback(err,result);
      });
      endConnection(connection);
    }
  },
  genre2:{
    get:(name, img, description, mbti, callback)=>{
      if(mbti) {
        const queryString=`
         select Genre.img, Genre.description, Song.name, Song.artist  from Genre
         inner join Genre_Mbti on Genre.id=Genre_Mbti.genreId
         inner join Song on Genre.id=Song.genreId
         where Genre_Mbti.mbti=mbti;
        `;

        const connection=createConnection();
        connection.query(queryString,function(err,result){
          callback(err,result);
        });
        endConnection(connection);
      }
      else {
        const queryString=`
         select Genre.img, Genre.description, Song.name, Song.artist  from Genre
         inner join Song on Genre.id=Song.genreId;
        `;

        const connection=createConnection();
        connection.query(queryString,function(err,result){
          callback(err,result);
        });
        endConnection(connection);
      }

    },
  }


};
