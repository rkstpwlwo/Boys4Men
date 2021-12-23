import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";

function Login({ LoginHandler,url }) {
  const [userId, setUserId] = useState({ userId: "" });
  const [password, setPassword] = useState({ password: "" });
  const history=useHistory();

  function inputuserId(e) {
    setUserId({ userId: e.target.value });
    console.log(userId);
  }
  function inputPassword(e) {
    setPassword({ password: e.target.value });
    console.log(password);
  }

  // 로그인을 요청하는 API
  function loginRequestHandler() {
    if(userId.userId===''){
      alert('아이디를 입력해주세요');
    }
    else if(password.password===''){
      alert('비밀번호를 입력해주세요')
    }
    else{
      axios({
        method:'POST',
        url:`${url}/user/login`,
        data:{id:userId.userId,password:password.password}
      }).then((res)=>{
        if(res.status===200){
          LoginHandler(res.data.accessToken);
          if(res.data.mbti===null){
            history.push('/MBTIsearch');
          }
          else{
            history.push('/');
          }
        }
      }).catch((err)=>{
        if(err.response.status===401){
          alert('아이디와 비밀번호가 올바르지 않습니다.');
        }
        else{
          alert('server error');
        }
      })
    }
  }

  return (
    <div className="loginPage">
      <div id="login">
        <br />
        <br />
        <div id="LoginTitle">Login</div>
        <div>아이디</div>
        <input
          name="userId"
          className="loginInput"
          value={userId.userId}
          onChange={(e) => inputuserId(e)}
          maxLength="12"
          placeholder="아이디를 입력해주세요"
        ></input>
        <br />
        <br />
        <div>비밀번호</div>
        <input
          name="password"
          className="loginInput"
          value={password.password}
          onChange={(e) => inputPassword(e)}
          type="password"
          maxLength="50"
          placeholder="비밀번호를 입력해주세요"
        ></input>
        <div>
          <br />
          <button
            className="loginPageButton"
            onClick={loginRequestHandler}
          >
            로그인
          </button>

          <Link to="Signup">
            <button
              className="loginPageButton"
              title="회원가입 페이지로 이동합니다"
            >
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
