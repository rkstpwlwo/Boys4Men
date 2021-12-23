import React, { useState } from "react";
import "./Board.css";
import axios from "axios";

function Writing({ accessToken }) {
  // 게시물 등록요청을 위한 API
  const [title, setTitle] = useState(""); // 글 제목
  const [content, setContent] = useState(""); // 글 내용

  function inputTitle(e) {
    setTitle(e.target.value);
    console.log(title);
  }
  function inputContent(e) {
    setContent(e.target.value);
    console.log(content);
  }
  function CreateWriting() {
    axios.post(
      `url/post`,
      { title: title, contents: content },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  }
  return (
    <div>
      <div className="boardtitle">게시판에 글을 작성합니다.</div>
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
        <button className="WritingButton">등록</button>
        <button className="WritingButton">취소</button>
      </div>
    </div>
  );
}

export default Writing;
