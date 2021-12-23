import axios from "axios";
import { useState } from "react";
import "./MbtiSurveyResult.css";
import UserMbtiExplain from "./UserMbtiExplain";
import Mbtiimage from "./Mbtiimage";
import GenreKinds from "../GenrePage/GenreKinds";
export default function MBTISurveyResult({ accessToken, userMbti }) {
  // const [genre, setgenre] = useState(null);
  let genre = {
    장르1: [{ name: "곡이름", artist: "가수이름" }],
    장르2: [{ name: "곡이름", artist: "가수이름" }],
  };
  userMbti="";

  // mbti유형이 정해진 후의 페이지에 필요한 데이터(mbti가 선호하는 장르와 해당장르에 속하는 곡들)을 요청하는 API
  function getSongs() {
    return axios
      .get(`url/genre/mbti/:mbti`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((data) => {});
  }

  return (
    <div className='outer-container'>
      <div id="top">
        <div id="imageTag">
          {/* mbti 이미지 */}
          <img></img>
        </div>
        <div id="explain">
          {/* mbti 유형에 대한 설명 */}
          <UserMbtiExplain userMbti={userMbti} />
        </div>
      </div>
      {/* 장르와 곡들을 받아옴 */}
      <div id="RecommenedGenre">
        {/* axios로 받아온 데이터를 mapping */}
        <div className="GenreRecommenedSong">
          <GenreKinds />
        </div>
        <div className="GenreRecommenedSong">
          <GenreKinds />
        </div>
        <div className="GenreRecommenedSong">
          <GenreKinds />
        </div>
        <div className="GenreRecommenedSong">
          <GenreKinds />
        </div>
      </div>
    </div>
  );
}
