import React from "react";
import "./Board.css";

function Writing() {
  return (
    <div id="Writing">
      <div>
        제목 : <input type="text" id="WritingTitle"></input>
      </div>

      <div>
        내용 : <textarea id="WritingContent"></textarea>
      </div>
      <button>등록</button>
      <button>취소</button>
    </div>
  );
}

export default Writing;
