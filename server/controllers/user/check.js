const {user}=require('../../models')

module.exports={
  idCheck: (req,res)=>{
    let id=req.body.id;
    if(!id){
      res.status(400).send({'message':'body must contain id'}).end();
    }
    user.check('userId',id,function(err,result){
      if(err){
        res.status(500).send({message:'database unavailable'}).end();
      }
      if(result.length===0){
        res.status(200).send({message:'available'}).end();
      }
      else{
        res.status(409).send({message:'unavailable'}).end();
      }
    });
  },

  nameCheck:(req,res)=>{
    let name=req.body.name;
    if(!name){
      res.status(400).send({'message':'body must contain name'}).end();
    }
    user.check('name',name,function(err,result){
      if(err){
        res.status(500).send({message:'database unavailable'}).end();
      }
      if(result.length===0){
        res.status(200).send({message:'available'}).end();
      }
      else{
        res.status(409).send({message:'unavailable'}).end();
      }
    });
  }

}