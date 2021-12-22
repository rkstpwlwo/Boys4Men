import "./Mbtisearch.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MBTISearch() {
  // mbti 설문 결과를 도출하는 함수
  const [IandE, setIandE] = useState(0);
  const [SandN, setSandN] = useState(0);
  const [TandF, setTandF] = useState(0);
  const [JandP, setJandP] = useState(0);

  // I와 E를 구분하는 함수
  function test1(e) {
    // console.log(e.target.checked); // check시 true
    let result = e.target.checked;
    if (result === true) {
      setIandE(IandE + 1);
    }
    // +면 E
  }
  // S와 N을 구분하는 함수
  function test2(e) {
    // console.log(e.target.checked); // check시 true
    let result = e.target.checked;
    if (result === true) {
      setSandN(SandN + 1);
    }
    // +면 N
  }
  function test3(e) {
    let result = e.target.checked;
    if (result === true) {
      setTandF(TandF + 1);
    }
    // +면 T
  }
  function test4(e) {
    let result = e.target.checked;
    if (result === true) {
      setJandP(JandP + 1);
    }
    // +면 P
  }
  function Mbtiresult() {
    console.log(IandE);
    console.log(SandN);
    console.log(TandF);
    console.log(JandP);
    let result = "";
    if (IandE <= 0) {
      result += "I";
    }
    if (IandE > 0) {
      result += "E";
    }
    if (SandN <= 0) {
      result += "S";
    }
    if (SandN > 0) {
      result += "N";
    }
    if (TandF <= 0) {
      result += "F";
    }
    if (TandF > 0) {
      result += "T";
    }
    if (JandP <= 0) {
      result += "J";
    }
    if (JandP > 0) {
      result += "P";
    }
    console.log(result);
    return result;
  }
  return (
    <div id="MBTISearch">
      <div id="MBTISearchTitle">MBTI설문조사</div>
      <div>
        해당하는 항목에 체크해주세요
        <div>
          <input type="checkbox" name="마음" onClick={test1}></input>
          <span>1.모임같은 자리에 되도록이면 나가려합니다</span>
        </div>
        <div>
          <input type="checkbox" name="마음" onClick={test1}></input>
          <span>2.다른 사람들과 대화하는 것을 좋아합니다.</span>
        </div>
        <div>
          <input type="checkbox" name="마음" onClick={test1}></input>
          <span>
            3.혼자있는 것 보단 사람들과 같이 어울려 시간을 보내는 것이 좋습니다
          </span>
        </div>
        <div>
          <input type="checkbox" name="마음" onClick={test2}></input>
          <span>4.사물을 볼 때 잠재력을 많이 보는 경향이 있습니다.</span>
        </div>
        <div>
          <input type="checkbox" name="에너지" onClick={test2}></input>
          <span>5.자신만의 생각에 빠질 때가 종종 있습니다.</span>
        </div>
        <div>
          <input type="checkbox" name="에너지" onClick={test2}></input>
          <span>
            6.영화나 소설을 보면서 숨겨진 의미나 해석을 찾아보곤 합니다.{" "}
          </span>
        </div>
        <div>
          <input type="checkbox" name="에너지" onClick={test3}></input>
          <span>7.열심히 한다는 칭찬 보다는 잘한다는 칭찬이 더 좋습니다. </span>
        </div>
        <div>
          <input type="checkbox" name="본성" onClick={test3}></input>
          <span>
            8.상대를 위로할때 공감해주기보다는 조언을 많이 해주는 편입니다.{" "}
          </span>
        </div>
        <div>
          <input type="checkbox" name="본성" onClick={test3}></input>
          <span>9.과정보다 결과를 중시하는 경향이 있습니다. </span>
        </div>
        <div>
          <input type="checkbox" name="본성" onClick={test4}></input>
          <span>10.달라진 환경에서 적응을 잘하는 편입니다. </span>
        </div>
        <div>
          <input type="checkbox" name="본성" onClick={test4}></input>
          <span>11.계획을 세우지 않을 때가 더 많습니다.</span>
        </div>
        <div>
          <input type="checkbox" name="본성" onClick={test4}></input>
          <span>
            12.일정을 계획할 때 다소 여유롭게 일정을 세우는 편입니다.{" "}
          </span>
        </div>
      </div>
      <button onClick={Mbtiresult}>설문 완료</button>
      <Link to="/MBTISurveyResult">
        <div id="searchEnd">
          {" "}
          <strong>설문조사 끝</strong>
        </div>
      </Link>

      {/* //마음 3개이상               외향 (e) 내향(i)   +일수록 외향(e)             총4개(1-4)
    //에너지 2개이상 sn          감각s 직관n  +일수록 현실주의형(n)              총3개(5-7)
    //본성 3개이상               사고(t) 감정(f) +일수록(t)                     총5개(8-12)
    //전술3개이상                                          
    //자아3개이상               판단형(j) 인식형(p)   +일수록p                  총5개(16-20)
*/}
      {/* https://codepen.io/hianna/pen/wvWNjoz?editors=0010  이 원리로 만듦 */}

      {/* <div onClick={()=>SearchEnd}> 설문조사 끝</div>    */}
      {/* 
     //MBTI찾아주는 함수
     SearchEnd(){
        let MBTILetter =[ ]  //한글자한글짜 [I,S,T,P]
        let MBTI = ''          
        EISearchEnd()
        SNSearchEnd()
        TFSearchEnd()
        JPearchEnd()  
        for(let i=0; i<MBTILetter.length; i++){
          MBTI = MBTI + MBTILetter
        }
        return MBTI 
        
        //이걸 axios로 보내주면 끝  
        //POST/mbti  랑  GET/genre/mbti  
    } 
     
     
     */}

      {/*  밑에는 MBTI 글자 찾아주는 함수*/}

      {/* 
                               //외향 (e) 내향(i)   +일수록 외향(e) 찾아주는 함수
        EISearchEnd(){
            const query = 'input[name="마음"]:checked';
            const selectedElements = document.querySelectorAll(query);    // 선택된 목록의 갯수 세기
            const selectedElementsCnt = selectedElements.length;
           if(selectedElementsCnt>3){
            MBTILetter.push(E)
           }
           else{
            MBTILetter.push(I)
           }
        }


                              // 감각s 직관n  +일수록 현실주의형(n) 찾아주는 함수
        SNSearchEnd(){
            
            const query = 'input[name="에너지"]:checked';
            const selectedElements = document.querySelectorAll(query);   // 선택된 목록의 갯수 세기
            const selectedElementsCnt = selectedElements.length;
            if(selectedElementsCnt>3){
             MBTILetter.push(N)
           }
           else{
             MBTILetter.push(S)
           }
        }


        TFSearchEnd(){
            //  사고(t) 감정(f) +일수록(t) 찾아주는 함수
            const query = 'input[name="본성"]:checked';
            const selectedElements = document.querySelectorAll(query);
            // 선택된 목록의 갯수 세기
            const selectedElementsCnt = selectedElements.length;
           if(selectedElementsCnt>3){
             MBTILetter.push(T)
           }
           else{
             MBTILetter.push(F)
           }
        }



        JPearchEnd(){
            //  판단형(j) 인식형(p)   +일수록(P) 찾아주는 함수 
            const query = 'input[name="자아"]:checked';
            const selectedElements = document.querySelectorAll(query);
            // 선택된 목록의 갯수 세기
            const selectedElementsCnt = selectedElements.length;
           if(selectedElementsCnt>3){
             MBTILetter.push(J)
           }
           else{
             MBTILetter.push(P)
           }
        }
        
        
        */}
    </div>
  );
}
