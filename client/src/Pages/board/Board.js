import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Board.css";

function Board({ isLogin }) {
  // 특정 mbti 게시물 목록조회 API
  const [posts, setposts] = useState({
    writer: "kim",
    mbti: "ENFP",
    title: "야호 첫글",
    date: "오늘",
  });
  function MbtiPost({ accessToken }) {
    // axios
    //   .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
    //   .then((result) => {});
  }
  function filterPosts(e) {}

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
      <div id="boardtitle">MBTI 게시판</div>
      <div>
        <select style={{ padding: "10px", margin: "20px" }}>
          {mbti.map((el) => {
            return <option>{el}</option>;
          })}
        </select>
      </div>
      <div className="Post">
        <div id="writer">작성자</div>
        <div id="MBTI">MBTI</div>
        <div id="title">제목</div>
        <div id="date">작성날짜</div>
      </div>
      <div className="Posts">
        <div id="writer">kim</div>
        <div id="MBTI">ENFP</div>
        <div id="title">야호 첫글</div>
        <div id="date">오늘</div>
      </div>
      <div className="Posts">
        <div id="writer">Lee</div>
        <div id="MBTI">ENFJ</div>
        <div id="title">재밌네요</div>
        <div id="date">오늘</div>
      </div>

      <div>
        <button
          id="Posting"
          onClick={() => {
            if (!isLogin) {
              return alert("로그인이 필요합니다");
            } else {
              // 글쓰기 페이지로 렌더링
            }
          }}
        >
          글쓰기
        </button>
        {/* <Link to="/Writing">
          <button>글쓰기2</button>
        </Link> */}
      </div>
    </div>
  );
}

export default Board;
