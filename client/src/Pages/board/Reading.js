import React from "react";

function Reading() {
  return (
    <div>
      <div className="Reading">
        <input placeholder="제목 예시입니다" disabled className="title"></input>
      </div>
      <div className="Reading">
        <input placeholder="작성자 :" disabled className="writer"></input>
        <input placeholder="성격유형 :" disabled className="mbti"></input>
      </div>
      <div className="Reading">
        <textarea
          placeholder="글 내용 예시입니다"
          disabled
          className="content"
        ></textarea>
      </div>
      <div className="Reading">
        {/* 해당 글을 쓴 유저만 수정하기 버튼이 보임 */}
        <button className="button">글 수정</button>
        <button className="button">글 삭제</button>
      </div>
    </div>
  );
}

export default Reading;
