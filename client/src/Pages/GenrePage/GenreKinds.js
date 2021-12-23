import React from "react";

function GenreKinds({data,genreName}) {
  console.log('data',data);
  return (
    <div className='genreSection'>
      <div>장르 이름</div>
      {/* 장르 이름을 props로 받아옴*/}
      <div>{genreName}</div>
      <br />
      <div>추천곡 리스트</div>
      {/* 추천곡들과 아티스트 이름을 props로 받아옴*/}
      <ul>
        {/* 추천곡 리스트도 props로 받아온 값을 mapping */}
        {data.map((el)=>{
          return <li>{`${el.name}  -  ${el.artist}`}</li>
        })}
      </ul>
    </div>
  );
}

export default GenreKinds;
