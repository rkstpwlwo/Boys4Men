import React, { useState } from "react";

function Signup({ region }) {
  const [userId, setUserId] = useState({ userId: "" });
  const [Username, setUsername] = useState({ Username: "" });
  const [password, setPassword] = useState({ password: "" });
  const [checkpassword, setcheckPassword] = useState({ checkpassword: "" });
  const [Address, setAddress] = useState({ Address: undefined });

  function inputuserId(e) {
    setUserId({ userId: e.target.value });
    console.log(userId);
    console.log(isvalid(userId.userId));
  }
  function inputUsername(e) {
    setUsername({ Username: e.target.value });
    console.log(Username);
  }
  function inputPassword(e) {
    setPassword({ password: e.target.value });
    console.log(password);
  }
  function inputcheckPassword(e) {
    setcheckPassword({ checkpassword: e.target.value });
    console.log(checkpassword);
  }
  function inputAddress(e) {
    setAddress({ Address: e.target.value });
    console.log(Address);
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
    // axios.post(url, {userId : userId.userId}).then((result) => )
  }

  // 회원가입 중복닉네임 체크를 위한 API
  function nameCheck() {
    // 중복 닉네임 체크
    // axios.post(url, { Username: Username.Username }).then((result) => {});
  }
  // 회원가입 요청을 위한 API
  function singup() {
    // 회원가입 버튼 클릭시 실행됨
    // axios.post(url, {
    //   userId: userId.userId,
    //   password: password.password,
    //   Username: Username.Username,
    //   Address: Address.Address,
    // });
  }
  return (
    <div className="signupPage">
      <br />
      <br />
      <div>아이디</div>
      <input
        placeholder="5글자 이상 12글자 이하"
        value={userId.userId}
        maxLength="12"
        onChange={inputuserId}
      ></input>
      <br />
      <br />
      <button
        onClick={() => {
          if (isvalid(userId.userId) === "blank") {
            return alert("아이디에 공백이 들어갈 수 없습니다");
          }
        }}
      >
        아이디 중복확인
      </button>
      <br />
      <br />
      <div>닉네임</div>
      <input
        placeholder="12글자 이하"
        value={Username.Username}
        maxLength="12"
        onChange={inputUsername}
      ></input>{" "}
      <br />
      <br />
      <button>닉네임 중복확인</button>
      <br />
      <br />
      <div>비밀번호</div>
      <input
        type="password"
        placeholder="5자 이상"
        value={password.password}
        maxLength="50"
        onChange={inputPassword}
      ></input>
      <br />
      <br />
      <div>비밀번호 확인</div>
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={checkpassword.checkpassword}
        maxLength="50"
        onChange={inputcheckPassword}
      ></input>
      <br />
      <br />
      <div>거주 지역선택</div>
      <select onChange={inputAddress} className="select">
        <option>거주하는 지역을 선택하세요</option>
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
              return alert("비밀번호를 다시 확인해주세요");
            }
            // 유효성 검사
            // 유효성 검사 끝나면 회원가입 완료와 함께 axios.post로 서버에 유저정보를 보냄
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Signup;
