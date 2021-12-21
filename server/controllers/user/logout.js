const {verifyToken,tokenParser} = require('../token');

module.exports=(req,res)=>{
  let token=tokenParser(req);
  if(token===''){
    res.status(401).send({message:'invalid token'}).end();
  }
  else if(verifyToken(token)==='invalid token'){
    res.status(401).send({message:'invalid token'}).end();
  }
  else{
    res.status(200).send({message:"logout success"}).end();
  }
}