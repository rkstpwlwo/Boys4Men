const {verifyToken,tokenParser}=require('../token');
const {user}=require('../../models')

module.exports={
  get:(req,res)=>{
    const token=tokenParser(req);
    if(token===''){
      res.status(401).send({message:'invalid token'}).end();
    }
    else if(verifyToken(token)==='invalid token'){
      res.status(401).send({message:'invalid token'}).end();
    }
    else{
      const userInfo=verifyToken(token);
      user.getInfo(userInfo,function(err,result){
        if(err){
          res.status(500).send({message:'database unavailable'}).end();
        }
        else{
          let data=result[0];
          res.status(200).send({
            id:data.userId,
            userName:data.name,
            city:data.city,
            mbti:data.mbti
          }).end();
        }
      })
    }
  },
  patch:(req,res)=>{
    const token=tokenParser(req);
    const newInfo={name:req.body.userName,city:req.body.city};
    if(token===''){
      res.status(401).send({message:'invalid token'}).end();
    }
    else if(verifyToken(token)==='invalid token'){
      res.status(401).send({message:'invalid token'}).end();
    }
    else{
      const userInfo=verifyToken(token);
      user.patchInfo(userInfo,newInfo,function(err,result){
        if(err){
          res.status(500).send({message:'database unavailable'}).end();
        }
        else{
          res.status(200).send({message:"modify success"}).end();
        }
      })
    }
  }
}