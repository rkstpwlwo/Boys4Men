const {createConnection,endConnection}=require('./createConnection');

module.exports = {
  user:{
    check:(keyword,searchKey,callback)=>{
      const queryString=`select id from User where ${keyword}=?`;
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

  },
  genre:{

  },
  comment:{

  }
};
