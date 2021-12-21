const {tokenParser,verifyToken}=require('../token');
const {user}=require('../../models')

module.exports=(req,res)=>{
  const mbti=req.body.mbti;
  const token=tokenParser(req);
  if(token===''){
    res.status(401).send({message:'invalid token'}).end();
  }
  else if(verifyToken(token)==='invalid token'){
    res.status(401).send({message:'invalid token'}).end();
  }
  else{
    const userInfo=verifyToken(token);
    user.saveMbti(userInfo,mbti,function(err,result){
      if(err){
        res.status(500).send({message:'database unavailable'}).end();
      }
      else{
        res.status(201).send({message:'save success'}).end();
      }
    })
  }
}