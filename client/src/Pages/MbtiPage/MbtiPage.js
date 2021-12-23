import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./MbtiPage.css";
import axios from "axios";
import SurveyLink from "../MBTIsearch/SurveyLink";
// import {
//   ISTJComponent,
//   ISTPComponent,
//   ISFJComponent,
//   ISFPComponent,
//   INTJComponent,
//   INTPComponent,
//   INFJComponent,
//   INFPComponent,
//   ESTJComponent,
//   ESTPComponent,
//   ESFJComponent,
//   ESFPComponent,
//   ENTJComponent,
//   ENTPComponent,
//   ENFJComponent,
//   ENFPComponent,
// } from "./Mbtiexplain";
//여기에 axios를 써서 각각 만들어주자
//메뉴는 main tag가져와서 삭제
// import {mypage,board,login, MyPage} from '../Nav/nav'
export default function MbtiRouter() {
  //  axios.get('./http://localhost:3004/genre/istp',)
  //  let ISTJ =document.getElementById('ISTJ')
  //  document.removeChild(ISTJ)
  // // onClick={ document.removeChild(ISTJ)}
  // if(window.location("http://localhost:3008/mbti/istj")){
  //   return <div>내목소리 들리니?</div>
  // }
  // axios.post("http://localhost:3008/mbti/istj").then()
  //onClick={()=>window.location.reload("http://localhost:3008/mbti/istj")}
  let port = window.location.port;
  return (
    <div>
      <main id="main">
        <SurveyLink />
        <ul>
          <li>
            <Link to="/mbti/istj" className="font">
              ISTJ
            </Link>{" "}
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/intj" className="font">
              INTJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/estj" className="font">
              ESTJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/entj" className="font">
              ENTJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/istp" className="font">
              ISTP
            </Link>
          </li>
          <li>
            <Link to="/mbti/intp" className="font">
              INTP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/estp" className="font">
              ESTP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/entp" className="font">
              ENTP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/isfj" className="font">
              ISFJ
            </Link>
          </li>
          <li>
            <Link to="/mbti/infj" className="font">
              INFJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>

          <li>
            <Link to="/mbti/esfj" className="font">
              ESFJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>

          <li>
            <Link to="/mbti/enfj" className="font">
              ENFJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/isfp" className="font">
              ISFP
            </Link>
          </li>
          <li>
            <Link to="/mbti/infp" className="font">
              INFP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/esfp" className="font">
              ESFP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/enfp" className="font">
              ENFP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
        </ul>
      </main>

      {/* 여기까지가 Nav창 내용 */}
    </div>
  );
}
