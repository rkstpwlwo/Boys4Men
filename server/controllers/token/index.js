require('dotenv').config();
const jwt=require('jsonwebtoken');

function signToken(userinfo){
  return jwt.sign(userinfo,process.env.ACCESS_SECRET)
}

function verifyToken(token){
  try{
    return jwt.verify(token,process.env.ACCESS_SECRET);
  }
  catch(err){
    return 'invalid token';
  }
}

function tokenParser(req){
  const authorization=req.headers['authorization'];
  if(!authorization){
    return '';
  }
  return authorization.split(' ')[1];
}

module.exports={signToken,verifyToken,tokenParser};