const mysql=require('mysql');
require('dotenv').config();

module.exports={
  createConnection:()=>{
    const connection=mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    });
    connection.connect();
    return connection;
  },
  endConnection:(connection)=>{
    connection.end();
    return;
  }
};