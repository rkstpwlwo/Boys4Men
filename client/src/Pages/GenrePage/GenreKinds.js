import React from "react";

function GenreKinds() {
  return (
    <div>
      <div>장르 이름</div>
      {/* 장르 이름을 props로 받아옴*/}
      <div>ex) 재즈</div>
      <br />
      <div>추천곡 리스트</div>
      {/* 추천곡들과 아티스트 이름을 props로 받아옴*/}
      <ul>
        {/* 추천곡 리스트도 props로 받아온 값을 mapping */}
        <li>추천곡 - 아티스트</li>
      </ul>
    </div>
  );
}

export default GenreKinds;
