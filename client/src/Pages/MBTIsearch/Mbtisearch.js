import "./Mbtisearch.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MBTISearch({ accessToken, getMbti, userMbti }) {
  // mbti 설문 결과를 도출하는 함수
  const [IandE, setIandE] = useState(0);
  const [SandN, setSandN] = useState(0);
  const [TandF, setTandF] = useState(0);
  const [JandP, setJandP] = useState(0);

  // I와 E를 구분하는 함수
  function test1(e) {
    // console.log(e.target.checked); // check시 true
    let result = e.target.checked;
    console.log(result);
    if (result === true) {
      setIandE(IandE + 1);
    } else {
      setIandE(IandE - 1);
    }
    // console.log(result);
    // +면 E
  }
  // S와 N을 구분하는 함수
  function test2(e) {
    // console.log(e.target.checked); // check시 true
    let result = e.target.checked;
    if (result === true) {
      setSandN(SandN + 1);
    } else {
      setSandN(SandN - 1);
    }
    // +면 N
  }
  function test3(e) {
    let result = e.target.checked;
    if (result === true) {
      setTandF(TandF + 1);
    } else {
      setTandF(TandF - 1);
    }
    // +면 T
  }
  function test4(e) {
    let result = e.target.checked;
    if (result === true) {
      setJandP(JandP + 1);
    } else {
      setJandP(JandP - 1);
    }
    // +면 P
  }

  // mbti 검사결과 함수
  function Mbtiresult() {
    let result = "";
    if (IandE <= 1) {
      result += "I";
    }
    if (IandE > 1) {
      result += "E";
    }
    if (SandN <= 1) {
      result += "S";
    }
    if (SandN > 1) {
      result += "N";
    }
    if (TandF <= 1) {
      result += "F";
    }
    if (TandF > 1) {
      result += "T";
    }
    if (JandP <= 1) {
      result += "J";
    }
    if (JandP > 1) {
      result += "P";
    }
    getMbti(result);

    console.log(userMbti);

    return result;
  }

  // mbti 유형저장을 요청하는 API
  function sendMbti() {
    axios.patch(
      `url/mbti`,
      { mbti: Mbtiresult() },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  }

  return (
    <div id="MBTISearch">
      <div id="MBTISearchTitle">성격유형 검사</div>
      <div>
        <div>
          <span>1. 모임같은 자리에 나가는 것을 좋아합니다.</span>
          <input
            className="check"
            type="checkbox"
            name="마음"
            onClick={test1}
          ></input>
        </div>
        <div>
          <span>
            2. 처음보는 사람들과 대화하는 것에 부담감을 갖지 않습니다.
          </span>
          <input type="checkbox" name="마음" onClick={test1}></input>
        </div>
        <div>
          <span>
            3. 혼자있는 것 보단 사람들과 같이 어울려 시간을 보내는 것이 좋습니다
          </span>
          <input type="checkbox" name="마음" onClick={test1}></input>
        </div>
        <div>
          <span>
            4. 현실에 일어나는 일보다 미래의 일에 대해 생각을 많이 하는
            편입니다.
          </span>
          <input type="checkbox" name="마음" onClick={test2}></input>
        </div>
        <div>
          <span>5. 자신만의 생각에 빠질 때가 종종 있습니다.</span>
          <input type="checkbox" name="에너지" onClick={test2}></input>
        </div>
        <div>
          <span>
            6. 영화나 소설을 보면서 숨겨진 의미나 해석을 찾아보곤 합니다.{" "}
          </span>
          <input type="checkbox" name="에너지" onClick={test2}></input>
        </div>
        <div>
          <span>
            7. 결과물에 대해 무조건적인 칭찬보다는 객관적으로 평가 받기를
            원합니다.{" "}
          </span>
          <input type="checkbox" name="에너지" onClick={test3}></input>
        </div>
        <div>
          <span>
            8. 상대를 위로할때 공감해주기보다는 조언을 많이 해주는 편입니다.{" "}
          </span>
          <input type="checkbox" name="본성" onClick={test3}></input>
        </div>
        <div>
          <span>9. 과정보다 결과를 중시하는 경향이 있습니다. </span>
          <input type="checkbox" name="본성" onClick={test3}></input>
        </div>
        <div>
          <span>10. 달라진 환경에서 적응을 잘하는 편입니다. </span>
          <input type="checkbox" name="본성" onClick={test4}></input>
        </div>
        <div>
          <span>11. 계획을 세우지 않을 때가 더 많습니다.</span>
          <input type="checkbox" name="본성" onClick={test4}></input>
        </div>
        <div>
          <span>
            12. 일정을 계획할 때 다소 여유롭게 일정을 세우는 편입니다.{" "}
          </span>
          <input type="checkbox" name="본성" onClick={test4}></input>
        </div>
      </div>
      <button
        id="save"
        onClick={() => {
          Mbtiresult();
        }}
      >
        결과값 저장하기
      </button>
      {/* 클릭 이벤트 발생시 서버에 mnti유형을 저장하는 API요청*/}
      <Link to="/MBTISurveyResult">
        <div
          id="searchEnd"
          onClick={() => {
            return sendMbti;
          }}
        >
          결과확인
        </div>
      </Link>
    </div>
  );
}
