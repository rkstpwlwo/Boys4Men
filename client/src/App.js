import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Nav from "./Components/Navigation";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
// import Mbti from "./Pages/Mbti";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mypage from "./Pages/Mypage";
import Signup from "./Pages/Signup";
import Board from "./Pages/board/Board";
import Writing from "./Pages/board/Writing";
import axios from "axios";
import MbtiPage from "./Pages/MbtiPage/MbtiPage";
import MBTISearch from "./Pages/MBTIsearch/Mbtisearch";
import MBTISurveyResult from "./Pages/MBTIsearch/MbtiSurveyResult";
import {
  ISTJComponent,
  ISTPComponent,
  ISFJComponent,
  ISFPComponent,
  INTJComponent,
  INTPComponent,
  INFJComponent,
  INFPComponent,
  ESTJComponent,
  ESTPComponent,
  ESFJComponent,
  ESFPComponent,
  ENTJComponent,
  ENTPComponent,
  ENFJComponent,
  ENFPComponent,
} from "./Pages/MbtiPage/Mbtiexplain";
import Genre from "./Pages/GenrePage/GenrePage";
import {
  PunkComponent,
  JazzComponent,
  AlternativeRockComponent,
  NewAgeComponent,
  PopComponent,
  MetalComponent,
  HiphopComponent,
  ElectronicaComponent,
  BluesComponent,
  RandBComponent,
  ReggaeComponent,
} from "./Pages/GenrePage/GenreExplain";

function App() {
  const [isLogin, setLogin] = useState(false);
  // const [userInfo, setuserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null); // 토큰을 가져옴
  const url="http://localhost:80";

  function issueAccessToken(token) {
    setAccessToken({ accessToken: token });
  }

  function LoginHandler(data) {
    setLogin(true);
    issueAccessToken(data);
  }

  // 로그아웃요청 API
  function LogoutHandler() {
    axios
      .post(`${url}/user/logout`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        setLogin(false);
        accessToken(null);
      });
  }

  const region = [
    "서울",
    "경기도",
    "강원도",
    "인천",
    "충청북도",
    "충청남도",
    "대전",
    "세종",
    "전라북도",
    "경상북도",
    "대구",
    "전라남도",
    "광주",
    "경상남도",
    "울산",
    "부산",
    "제주도",
  ];

  const [post, setpost] = useState(null);
  // 특정 게시물의 내용을 조회하는 API
  function ReadBoard() {
    // axios.get("url/post/:postid",{headers : {Authorization : `Bearer ${accessToken}`}}).then((result) => {
    //   setpost({id  ,writer , mbti,title,content,sameUser })
    // })
  }
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav isLogin={isLogin} LogoutHandler={LogoutHandler} />
        </div>
        <div>
          <Switch>
            <div>
              <Route exact path="/">
                <MbtiPage />
                <Genre />
              </Route>
              <Route path="/board">
                <Board accessToken={accessToken} isLogin={isLogin} />
              </Route>
              <Route path="/Login">
                <Login LoginHandler={LoginHandler} url={url}/>
              </Route>
              <Route path="/Mypage">
                <Mypage accessToken={accessToken} region={region} />
              </Route>
              <Route path="/Signup">
                <Signup region={region} url={url}/>
              </Route>
              <Route path="/Writing">
                <Writing />
              </Route>
              <Route path="/MBTIsearch">
                <MBTISearch />
              </Route>
              <Route path="/MBTISurveyResult">
                <MBTISurveyResult />
              </Route>
              <Route path="/mbti/istj">
                <ISTJComponent />
              </Route>
              <Route path="/mbti/istp">
                <ISTPComponent />
              </Route>
              <Route path="/mbti/isfj">
                <ISFJComponent />
              </Route>
              <Route path="/mbti/isfp">
                <ISFPComponent />
              </Route>
              <Route exact path="/mbti/intj">
                <INTJComponent />
              </Route>
              <Route path="/mbti/intp">
                <INTPComponent />
              </Route>
              <Route path="/mbti/infj">
                <INFJComponent />
              </Route>
              <Route path="/mbti/infp">
                <INFPComponent />
              </Route>
              <Route exact path="/mbti/estj">
                <ESTJComponent />
              </Route>
              <Route path="/mbti/estp">
                <ESTPComponent />
              </Route>
              <Route path="/mbti/esfj">
                <ESFJComponent />
              </Route>
              <Route path="/mbti/esfp">
                <ESFPComponent />
              </Route>
              <Route exact path="/mbti/entj">
                <ENTJComponent />
              </Route>
              <Route path="/mbti/entp">
                <ENTPComponent />
              </Route>
              <Route path="/mbti/enfj">
                <ENFJComponent />
              </Route>
              <Route path="/mbti/enfp">
                <ENFPComponent />
              </Route>

              <Route exact path="/genre/Punk">
                <PunkComponent />
              </Route>
              <Route path="/genre/Jazz">
                <JazzComponent />
              </Route>
              <Route path="/genre/AlternativeRock">
                <AlternativeRockComponent />
              </Route>
              <Route path="/genre/NewAge">
                <NewAgeComponent />
              </Route>
              <Route path="/genre/Pop">
                <PopComponent />
              </Route>
              <Route path="/genre/Metal">
                <MetalComponent />
              </Route>
              <Route path="/genre/Hiphop">
                <HiphopComponent />
              </Route>
              <Route path="/genre/Electronica">
                <ElectronicaComponent />
              </Route>
              <Route path="/genre/Blues">
                <BluesComponent />
              </Route>
              <Route path="/genre/RandB">
                <RandBComponent />
              </Route>
              <Route path="/genre/Reggae">
                <ReggaeComponent />
              </Route>
            </div>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
