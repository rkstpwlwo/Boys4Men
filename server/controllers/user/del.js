const {tokenParser,verifyToken}=require('../token');
const {user}=require('../../models')


module.exports=(req,res)=>{
  const token=tokenParser(req);
  if(token===''){
    res.status(401).send({message:'invalid token'}).end();
  }
  else if(verifyToken(token)==='invalid token'){
    res.status(401).send({message:'invalid token'}).end();
  }
  else{
    const userInfo=verifyToken(token);
    user.deleteUser(userInfo,function(err,result){
      if(err){
        res.status(500).send({message:'database unavailable'}).end();
      }
      else{
        res.status(204).send().end();
      }
    })
  }
}