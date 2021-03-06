import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Nav from "./Components/Navigation";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
// import Mbti from "./Pages/Mbti";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Mypage from "./Pages/Mypage";
import Signup from "./Pages/Signup";
import Board from "./Pages/board/Board";
import Writing from "./Pages/board/Writing";
import Reading from "./Pages/board/Reading";
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
import {GenreDetail} from "./Pages/GenrePage/GenreExplain";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [genre,setGenre]=useState('');
  const [userMbti, setuserMbti] = useState(null); //mbti

  // const [userInfo, setuserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState({ accessToken: "" }); // 토큰을 가져옴
  const url = "http://ec2-3-36-70-242.ap-northeast-2.compute.amazonaws.com";
  const history = useHistory();

  function issueAccessToken(token) {
    setAccessToken({ accessToken: token });
  }
  function LoginHandler(data) {
    setLogin(true);
    issueAccessToken(data);
  }
  function getMbti(mbti) {
    setuserMbti(mbti);
  }

  // 로그아웃요청 API
  function LogoutHandler() {
    axios({
      method: "POST",
      url: `${url}/user/logout`,
      headers: { authorization: `Bearer ${accessToken.accessToken}` },
    })
      .then((res) => {
        setAccessToken({ accessToken: "" });
        setLogin(false);
        alert("로그아웃 되었습니다.");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("유효하지않은 토큰입니다.");
        } else {
          alert("server error");
        }
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
          <Nav
            isLogin={isLogin}
            LogoutHandler={LogoutHandler}
            history={history}
          />
        </div>
        <div>
          <Switch>
            <div>
              <Route exact path="/">
                <MbtiPage />
                <Genre setGenre={setGenre}/>
              </Route>
              <Route path="/board">
                <Board accessToken={accessToken} isLogin={isLogin} />
              </Route>
              <Route path="/Login">
                <Login LoginHandler={LoginHandler} url={url} />
              </Route>
              <Route path="/Mypage">
                <Mypage
                  accessToken={accessToken}
                  region={region}
                  url={url}
                  setAccessToken={setAccessToken}
                  setLogin={setLogin}
                />
              </Route>
              <Route path="/Signup">
                <Signup region={region} url={url} />
              </Route>
              <Route path="/Writing">
                <Writing accessToken={accessToken} />
              </Route>
              <Route path="/Reading">
                <Reading accessToken={accessToken} />
              </Route>
              <Route path="/MBTIsearch">
                <MBTISearch
                  accessToken={accessToken}
                  userMbti={userMbti}
                  getMbti={getMbti}
                />
              </Route>
              <Route path="/MBTISurveyResult">
                <MBTISurveyResult
                  accessToken={accessToken}
                  userMbti={userMbti}
                  url={url}
                />
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

              <Route exact path="/genre/detail">
                <GenreDetail url={url} genre={genre}/>
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
