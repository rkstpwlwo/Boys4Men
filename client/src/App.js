import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Nav from "./Components/Navigation";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Mbti from "./Pages/Mbti";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mypage from "./Pages/Mypage";
import Signup from "./Pages/Signup";
import Board from "./Pages/board/Board";
import SurveyLink from "./Pages/SurveyLink";
import Writing from "./Pages/board/Writing";
import axios from "axios";
function App() {
  const [isLogin, setLogin] = useState(false);
  // const [userInfo, setuserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null); // 토큰을 가져옴

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
      .post("url/user/logout", {
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
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav isLogin={isLogin} LogoutHandler={LogoutHandler} />
          {/* mbti 탭 */}
        </div>
        <div>
          <Switch>
            <div>
              <Route exact path="/">
                <Mbti />
              </Route>
              <Route path="/board">
                <Board accessToken={accessToken} isLogin={isLogin} />
              </Route>
              <Route path="/Login">
                <Login LoginHandler={LoginHandler} />
              </Route>
              <Route path="/Mypage">
                <Mypage accessToken={accessToken} region={region} />
              </Route>
              <Route path="/Signup">
                <Signup region={region} />
              </Route>
              <Route path="/Writing">
                <Writing />
              </Route>
              <Route path="/SurveyLink">
                <SurveyLink />
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
