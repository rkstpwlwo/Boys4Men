const {verifyToken,tokenParser}=require('../token');
const {genre}=require('../../models');

module.exports=(req,res)=>{
  const token=tokenParser(req);
  if(token===''){
    res.status(401).send({message:'invalid token'}).end();
  }
  else if(verifyToken(token)==='invalid token'){
    res.status(401).send({message:'invalid token'}).end();
  }
  else{
    const mbti=req.params.mbti;
    genre.getMbti(mbti,function(err,result){
      if(err){
        res.status(500).send({message:'database unavailable'}).end();
      }
      else{
        let data={};
        for(const row of result){
          let genreName=row.genreName;
          if(!data[genreName]){
            data[genreName]=[{name:row.name,artist:row.artist}];
          }
          else{
            data[genreName].push({name:row.name,artist:row.artist});
          }
        }
        res.status(200).send(data).end();
      }
    })
  }
}