import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Board.css";
import axios from "axios";

function Board({ accessToken, isLogin }) {
  // 특정 mbti 게시물 목록조회 API
  const [posts, setposts] = useState(null);
  function MbtiPost(accessToken) {
    axios
      .get("url/post?/category=카테고리이름", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {});
  }

  // 특정 게시물의 내용을 조회하는 API (글을 클릭했을 때 내용이 나옴)
  function Content(accessToken) {
    axios.get("url/post/:postId", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }

  const mbti = [
    "전체 글보기",
    "INTP",
    "INTJ",
    "INFP",
    "INFJ",
    "ISTP",
    "ISTJ",
    "ISFP",
    "ISFJ",
    "ENTP",
    "ENTJ",
    "ENFP",
    "ENFJ",
    "ESTP",
    "ESTJ",
    "ESFP",
    "ESFJ",
  ];
  return (
    <div id="Board">
      <div className="boardtitle">
        게시판
        <div>
          <select style={{ padding: "10px", margin: "20px" }}>
            {mbti.map((el) => {
              return <option>{el}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="Post">
        <div id="writer">작성자</div>
        <div id="MBTI">성격유형</div>
        <div id="title">제목</div>
        <div id="date">작성날짜</div>
      </div>
      <div className="Posts">
        <div id="writer">Kim</div>
        <div id="MBTI">ENFP</div>
        {/* <Link to="/Writing"> */}
        <div id="title">야호 첫글</div>
        {/* onClick 이벤트 */}
        {/* </Link>*/}
        <div id="date">오늘</div>
      </div>
      <div className="Posts">
        <div id="writer">Lee</div>
        <div id="MBTI">ENFJ</div>
        <div id="title">재밌네요</div>
        <div id="date">오늘</div>
      </div>

      <div>
        {isLogin ? (
          <button
            id="Posting"
            onClick={() => {
              return alert("로그인이 필요합니다");
            }}
          >
            글쓰기
          </button>
        ) : (
          <Link to="/Writing">
            <button id="Posting">글쓰기</button>
          </Link>
        )}
        {/* 글쓰기 버튼 클릭시 로그인한 사용자만 글을 작성할 수 있게 합니다 isLogin부분을 !isLogin으로 수정하시면 됩니다 */}
        {/* <Link to="/Writing">
          <button>글쓰기2</button>
        </Link> */}
      </div>
    </div>
  );
}

export default Board;
