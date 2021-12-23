const {genre}=require('../../models')

module.exports=(req,res)=>{
  genre.get(function(err,result){
    if(err){
      res.status(500).send({message:'database unavailable'}).end();
    }
    else{
      res.status(200).send({
        genres:result.map((el)=>{
          return {image:el.img,name:el.name}
        })
      }).end();
    }
  })
}