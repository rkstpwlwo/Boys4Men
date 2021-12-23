const {genre}=require('../../models')

module.exports=(req,res)=>{
  const genreName=req.params.genre;
  genre.getGenre(genreName,function(err,result){
    if(err){
      res.status(500).send({message:'database unavailable'}).end();
    }
    else{
      let data={
        image:result[0].img,
        description:result[0].description,
        song:result.map((el)=>{
          return {name:el.name,artist:el.artist}
        })
      }
      res.status(200).send(data).end();
    }
  })
} 