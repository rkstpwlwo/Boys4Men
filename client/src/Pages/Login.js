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
    axios
      .post(
        "url/user/login",
        { id: userId.userId, password: password.password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((result) => {
        // 로그인 성공시
        LoginHandler(result.data.data.accessToken);
        // result.data.data.mbti 값이 null인 유저와 null 이 아닌 유저를 구분해서 페이지를 렌더링
        // 로그인 실패시
        // 유효하지 않은 id나 password라는 alert를 띄움
      });
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
            onClick={() => {
              if (userId.userId === "") {
                return alert("아이디를 입력하세요");
              }
              if (password.password === "") {
                return alert("비밀번호를 입력하세요");
              }
              // 유효성 검사
              // 유효성 검사가 완료되면 서버에 아이디와 비밀번호를 보내고
              // 서버에 있는 아이디와 비밀번호라면 로그인 성공, 서버에 없는 아이디나 비밀번호라면 로그인 실패
            }}
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
