import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup({ region,url,history }) {
  const [userId, setUserId] = useState({ userId: "" });
  const [Username, setUsername] = useState({ Username: "" });
  const [password, setPassword] = useState({ password: "" });
  const [checkpassword, setcheckPassword] = useState({ checkpassword: "" });
  const [Address, setAddress] = useState({ Address: undefined });

  function inputuserId(e) {
    setUserId({ userId: e.target.value });
  }
  function inputUsername(e) {
    setUsername({ Username: e.target.value });
  }
  function inputPassword(e) {
    setPassword({ password: e.target.value });
  }
  function inputcheckPassword(e) {
    setcheckPassword({ checkpassword: e.target.value });
  }
  function inputAddress(e) {
    setAddress({ Address: e.target.value });
  }

  function isvalid(string) {
    // 유효성 검사
    let character = /[^a-zA-Z0-9]/; // character.test("hi"); false
    if (string.includes(" ")) {
      return "blank";
    }
    if (string.length < 5) {
      return "short";
    }
    if (character.test(string)) {
      return "not vaild character";
    }
    return true;
  }
  // 회원가입 중복아이디 체크를 위한 API
  function idCheck() {
    // 중복 아이디 체크
    axios.post(`${url}/user/idCheck`, { id: userId.userId }).then((result) => {});
  }

  // 회원가입 중복닉네임 체크를 위한 API
  function nameCheck() {
    // 중복 닉네임 체크
    axios
      .post(`${url}/user/nameCheck`, { name: Username.Username })
      .then((result) => {});
  }
  // 회원가입 요청을 위한 API
  function signup() {
    // 회원가입 버튼 클릭시 실행됨
    // axios.post("url/signup", {
    //   id: userId.userId,
    //   password: password.password,
    //   name: Username.Username,
    //   city: Address.Address,
    // });
    axios({
      method:'POST',
      url:`${url}/user/signup`,
      data:{
        id:userId.userId,
        password:password.password,
        userName:Username.Username,
        city:Address.Address
      }
    }).then((res)=>{
      if(res.status===201){
        alert('회원가입 완료');
        history.push('/Login');
      }
    }).catch(function(err){
      alert('회원가입 실패')
    })
  }
  return (
    <div className="signupPage">
      <div id="signupTitle">회원가입</div>
      <br />
      <br />
      <div className="signupPage2">
        <span>아이디</span>
        <input
          placeholder="5글자 ~ 12글자 "
          value={userId.userId}
          maxLength="12"
          onChange={inputuserId}
        ></input>
        <button>중복 확인</button>
        {/* onClick={() => {idCheck()}} */}
        <br />
        <br />
        <span>닉네임</span>
        <input
          placeholder="12글자 이하"
          value={Username.Username}
          maxLength="12"
          onChange={inputUsername}
        ></input>
        <button>중복 확인</button>
        {/* onClick={() => {nameCheck()}} */}
        <br />
        <br />
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="5글자 이상"
          value={password.password}
          maxLength="50"
          onChange={inputPassword}
        ></input>
        <br />
        <br />
        <span>비밀번호 확인</span>
        <input
          type="password"
          value={checkpassword.checkpassword}
          maxLength="50"
          onChange={inputcheckPassword}
        ></input>
        <br />
        <br />
        <span>거주지역</span>
        <select onChange={inputAddress} id="region">
          <option>거주지역 선택</option>
          {region.map((city) => {
            return <option>{city}</option>;
          })}
        </select>
        <br />
        <br />
        <div>
          <button
            id="signupButton"
            onClick={() => {
              if (userId.userId === "") {
                return alert("아이디를 입력하세요");
              }
              if (Username.Username === "") {
                return alert("닉네임을 입력하세요");
              }
              if (password.password === "") {
                return alert("비밀번호를 입력하세요");
              }
              if (
                Address.Address === "거주하는 지역을 선택하세요" ||
                Address.Address === undefined
              ) {
                return alert("거주하는 지역을 선택하세요");
              }
              // 유효성 검사
              if (isvalid(userId.userId) === "blank") {
                return alert("아이디에 공백이 들어갈 수 없습니다");
              }
              if (isvalid(Username.Username) === "blank") {
                return alert("닉네임에 공백이 들어갈 수 없습니다");
              }
              if (isvalid(userId.userId) === "short") {
                return alert("아이디는 5글자 이상 입력해주세요");
              }
              if (isvalid(password.password) === "short") {
                return alert("비밀번호는 5자 이상 입력해주세요");
              }
              if (isvalid(userId.userId) === "not vaild character") {
                return alert("아이디는 숫자 또는 영문만 가능 합니다");
              }
              if (password.password !== checkpassword.checkpassword) {
                return alert("비밀번호를 다시 확인해주세요"); // 비밀번호 확인
              } else {
                // signup()함수 실행
                // window.location.assign("localhost:3000/Login");
                // window.location.assign(window.location.origin+'/Login');
              }
              // 유효성 검사 끝나면 회원가입 완료와 함께 axios.post로 서버에 유저정보를 보냄(signup 함수)
              // 로그인페이지로 렌더링
              // <Link to="">
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
