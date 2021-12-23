import React, { useState } from "react";
import "./Board.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Writing({ accessToken }) {
  const history = useHistory();
  const [title, setTitle] = useState(""); // 글 제목
  const [content, setContent] = useState(""); // 글 내용

  function inputTitle(e) {
    setTitle(e.target.value);
    // console.log(title);
  }
  function inputContent(e) {
    setContent(e.target.value);
    // console.log(content);
  }
  // 글 작성 유효성 검사
  function isvalid() {
    if (title === "") {
      return alert("글의 제목을 작성해 주세요");
    }
    if (content === "") {
      return alert("글의 내용을 작성해 주세요");
    }
  }

  // 게시물 등록요청을 위한 API
  function CreateWriting() {
    axios.post(
      `url/post`,
      { title: title, contents: content },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  }
  return (
    <div>
      <div className="boardtitle" style={{ paddingTop: "50px" }}>
        게시판에 글을 작성합니다.
      </div>
      <div id="Writing">
        <div>
          <div>글 제목</div>
          <input
            type="text"
            id="WritingTitle"
            value={title}
            onChange={inputTitle}
          ></input>
        </div>
        <br />
        <br />
        <div>
          <div>글 내용</div>
          <textarea
            id="WritingContent"
            value={content}
            onChange={inputContent}
          ></textarea>
        </div>
        <button
          className="WritingButton"
          onClick={() => {
            isvalid(); //유효성 검사하고
            // CreateWriting(); // API 요청 보낸후
            history.push("/board"); // 게시판으로
          }}
        >
          등록
        </button>
        <button
          className="WritingButton"
          onClick={() => {
            history.push("/board");
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
}

export default Writing;
