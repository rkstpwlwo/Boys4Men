import axios from "axios";
import { useState,useEffect } from "react";
import "./MbtiSurveyResult.css";
import UserMbtiExplain from "./UserMbtiExplain";
import Mbtiimage from "./Mbtiimage";
import GenreKinds from "../GenrePage/GenreKinds";
export default function MBTISurveyResult({ accessToken, userMbti,url }) {
  const [genre, setGenre] = useState(null);

  // mbti유형이 정해진 후의 페이지에 필요한 데이터(mbti가 선호하는 장르와 해당장르에 속하는 곡들)을 요청하는 API
  function getSongs() {
    return axios
      .get(`${url}/genre/mbti/${userMbti}`, {
        headers: { Authorization: `Bearer ${accessToken.accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setGenre(res.data);
      });
  }

  useEffect(()=>{
    getSongs();
  },[]);

  return (
    <div className='outer-container'>
        <div id="imageTag">
          {/* mbti 이미지 */}
          <img src="./resource/mbti.jpg"></img>
        </div>
        <div id="explain">
          {/* mbti 유형에 대한 설명 */}
          <UserMbtiExplain userMbti={userMbti} />
        </div>
      {/* 장르와 곡들을 받아옴 */}
      <div id="RecommenedGenre">
        {/* axios로 받아온 데이터를 mapping */}
        {genre!==null&&Object.keys(genre).map((el)=>{
          console.log(el);
          return <GenreKinds data={genre[el]} genreName={el}/>
        })}
      </div>
    </div>
  );
}
