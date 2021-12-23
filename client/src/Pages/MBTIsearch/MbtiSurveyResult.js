import axios from "axios";
import { useState } from "react";
import "./MbtiSurveyResult.css";
import UserMbtiExplain from "./UserMbtiExplain";
import Mbtiimage from "./Mbtiimage";
export default function MBTISurveyResult({ accessToken, userMbti }) {
  const [genre, setgenre] = useState(null);
  // mbti유형이 정해진 후의 페이지에 필요한 데이터(mbti가 선호하는 장르와 해당장르에 속하는 곡들)을 요청하는 API
  console.log(userMbti);

  function getSongs() {
    return axios
      .get(`url/genre/mbti/:mbti`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((data) => {});
  }

  return (
    <div id="MBTISurveyResult">
      <div id="top">
        <div id="imageTag">
          {/* mbti 이미지 */}
          <Mbtiimage userMbti={userMbti} />
        </div>
        <div id="explain">
          {/* mbti 유형에 대한 설명 */}
          <UserMbtiExplain userMbti={userMbti} />
        </div>
      </div>
      {/* 장르와 곡들을 받아옴 */}
      <div id="RecommenedGenre">
        <div className="GenreRecommenedSong">장르1</div>
        <div className="GenreRecommenedSong">장르2</div>
        <div className="GenreRecommenedSong">장르3</div>
        <div className="GenreRecommenedSong">장르4</div>
      </div>
    </div>
  );
}
