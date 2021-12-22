const {signToken}=require('../token');
const {user}=require('../../models')

module.exports=(req,res)=>{
  let id=req.body.id;
  let password=req.body.password;
  user.login({id:id,password:password},function(err,result){
    if(err){
      res.status(500).send({message:'database unavailable'}).end();
    }
    else{
      if(result.length===0){
        res.status(401).send({message:'invalid id or password'});
      }
      else{
        let tokenInfo={
          id:result[0].userId,
          name:result[0].name,
        }
        res.status(200).send({
          message:'login success',
          accessToken:signToken(tokenInfo),
          mbti:result[0].mbti
        }).end();
      }
    }
  })
}