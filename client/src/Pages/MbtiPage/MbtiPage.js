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
  return (
    <div>
      <main id="main">
        <SurveyLink />
        <ul>
          <li>
            <Link to="/mbti/istj" id="istj">
              ISTJ
            </Link>{" "}
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/intj" id="intj">
              INTJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/estj" id="estj">
              ESTJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/entj" id="entj">
              ENTJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/istp" id="istp">
              ISTP
            </Link>
          </li>
          <li>
            <Link to="/mbti/intp" id="intp">
              INTP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/estp" id="estp">
              ESTP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/entp" id="entp">
              ENTP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/isfj" id="isfj">
              ISFJ
            </Link>
          </li>
          <li>
            <Link to="/mbti/infj" id="infj">
              INFJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>

          <li>
            <Link to="/mbti/esfj" id="esfj">
              ESFJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>

          <li>
            <Link to="/mbti/enfj" id="enfj">
              ENFJ
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/isfp" id="isfp">
              ISFP
            </Link>
          </li>
          <li>
            <Link to="/mbti/infp" id="infp">
              INFP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/esfp" id="esfp">
              ESFP
            </Link>
            {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li>
            <Link to="/mbti/enfp" id="enfp">
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
