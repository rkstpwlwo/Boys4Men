import React from "react";

import { Link } from "react-router-dom";

function SurveyLink() {
  return (
    <div>
      <Link to="/MBTIsearch">
        <button
          id="SurveyLink"
          title="MBTI를 확인하고 그에 맞는 음악을 추천받습니다"
        >
          MBTI검사하기
        </button>
      </Link>
    </div>
  );
}

export default SurveyLink;
