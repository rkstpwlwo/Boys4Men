const {user}=require('../../models')


module.exports=(req,res)=>{
  let id=req.body.id;
  let password=req.body.password;
  let name=req.body.userName;
  let city=req.body.city;
  user.signup({id:id,password:password,name:name,city:city},function(err,result){
    if(err){
      console.log(err);
      res.status(500).send({message:'database unavailable'}).end();
    }
    else{
      res.status(201).send({message:'created'}).end();
    }
  })
}