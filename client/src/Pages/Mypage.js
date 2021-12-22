import { useState } from "react";
import React from "react";
import axios from "axios";

function Mypage({ accessToken, region }) {
  // 기존에 나와야할 정보는 아이디 ,닉네임 ,MBTI,지역
  const [userId, setUserId] = useState({ userId: "" }); // 아이디 (수정 불가)
  const [Username, setUsername] = useState({ Username: "" }); // 원래 닉네임 (수정 가능)
  const [Address, setAddress] = useState({ Address: "" }); // 원래 주소 (수정 가능)
  const [MBTI, setMBTI] = useState({ MBTI: "" }); // 유저의 mbti (수정 불가)

  // 유저정보를 요청하는 API
  function accessTokenRequset() {
    axios
      .get("url/user/info", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        setUserId({ userId: result.data.data.id });
        setUsername({ Username: result.data.data.userName });
        setAddress({ Address: result.data.data.city });
        setMBTI({ MBTI: result.data.data.mbti });
      });
  }
  accessTokenRequset(); //유저의 정보를 받아옴

  // 변경 사항
  const [newUsername, setnewUsername] = useState({ newUsername: "" }); // 변경할 닉네임
  const [password, setPassword] = useState({ password: "" }); // 현재 비밀번호
  const [changedpassword, setcheckPassword] = useState({ changedpassword: "" }); // 새로 변경할 비밀번호
  const [checkchangedpassword, setcheckchangedpassword] = useState({
    checkchangedpassword: "",
  }); // 변경할 비밀번호 확인
  const [newAddress, setnewAddress] = useState({ newAddress: "" }); // 변경할 주소지
  const [openUserInfo, setopenUserInfo] = useState(false); // 회원정보 수정을 위해 열리는 모달창
  const [openPassword, setopenPassword] = useState(false); // 비밀번호 변경을 위해 열리는 모달창
  const [openWithdrawal, setopenWithdrawal] = useState(false); // 회원탈퇴를 위해 열리는 모달창

  // 유저가 입력한 값으로 수정
  function inputnewUsername(e) {
    setnewUsername({ newUsername: e.target.value });
    console.log(newUsername);
  }
  function inputPassword(e) {
    setPassword({ password: e.target.value });
    console.log(password);
  }
  function inputchangedpassword(e) {
    setcheckPassword({ changedpassword: e.target.value });
    console.log(changedpassword);
  }
  function inputcheckchangedpassword(e) {
    setcheckchangedpassword({ checkchangedpassword: e.target.value });
    console.log(checkchangedpassword);
  }
  function inputAddress(e) {
    setnewAddress({ newAddress: e.target.value });
    console.log(newAddress);
  }

  // 유효성 검사
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

  // 회원정보 수정 API
  function putUserInfo() {
    axios
      .patch(
        "url/user/info",
        { userName: newUsername.newUsername, city: newAddress.newAddress },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((result) => {});
  }
  // 비밀번호 변경 API
  function putPassword() {
    axios.patch(
      "url/user/password",
      { password: changedpassword.changedpassword },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  }

  // 회원탈퇴 API
  function deleteUserInfo() {
    axios.delete("url/del", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    // 삭제 성공시 204 상태코드만 반환하므로 message가 오지 않는다
  }
  return (
    <div className="Mypage">
      {/* 회원탈퇴 버튼*/}
      <div id="MyPageTitle">My Page</div>
      {openWithdrawal ? (
        <div className="checkpassword">
          <br />
          <br />
          <br />
          <div>정말로 회원탈퇴 하시겠습니까?</div>
          <br />

          <br />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password.password}
            onChange={inputPassword}
          ></input>
          <br />
          <br />
          <button
            onClick={() => {
              // 비밀번호가 맞는지 확인
              // 실패하면 비밀번호가 틀렸다고 띄움
              // deleteUserInfo()
              // 회원 탈퇴 완료시 홈화면으로 렌더링
            }}
          >
            확인
          </button>

          <button
            onClick={() => {
              setopenWithdrawal(false);
            }}
          >
            취소
          </button>
        </div>
      ) : (
        ""
      )}
      {/* 비밀번호 변경 */}
      {openPassword ? (
        <div className="checkpassword">
          <br />
          <br />
          <div>비밀번호를 변경하시겠습니까?</div>
          <br />
          <br />
          <div>현재 비밀번호</div>
          <input
            type="password"
            placeholder="현재 비밀번호"
            value={password.password}
            onChange={inputPassword}
          ></input>
          <br />
          <br />
          <div>변경할 비밀번호</div>
          <input
            type="password"
            placeholder="변경할 비밀번호(5자 이상)"
            value={changedpassword.changedpassword}
            onChange={inputchangedpassword}
          ></input>
          <br />
          <br />
          <div>비밀번호 확인</div>
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={checkchangedpassword.checkchangedpassword}
            onChange={inputcheckchangedpassword}
          ></input>
          <br />
          <br />

          <button
            onClick={() => {
              if (changedpassword.changedpassword === "") {
                return alert("변경할 비밀번호를 입력하세요");
              }
              if (isvalid(changedpassword.changedpassword) === "short") {
                return alert("비밀번호는 5자이상이어야 합니다");
              }
              if (
                changedpassword.changedpassword !==
                checkchangedpassword.checkchangedpassword
              ) {
                return alert("변경할 비밀번호 다시 확인해주세요");
              }
              // putPassword()
              // 비밀번호 변경을 성공하면 비밀번호를 변경했습니다 alert창과 함깨 모달 창이 닫힘(setopenPassword(false))
            }}
          >
            확인
          </button>

          <button
            onClick={() => {
              setopenPassword(!openPassword);
            }}
          >
            취소
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="MypageText">
        <div id="MypageMBTI">
          <div style={{ fontSize: "50px" }}>ISFP</div>
          <div>
            <img
              className="MBTIimg"
              src="https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            />
          </div>
        </div>
        아이디
        <input type="text" placeholder="유저의 아이디" disabled></input>
        <br />
        <br />
        닉네임
        <input
          type="text"
          placeholder="유저의 닉네임(수정 가능)"
          value={newUsername.newUsername}
          maxLength="12"
          onChange={inputnewUsername}
        ></input>
        <br />
        <br />
        <div>
          지역 변경{" "}
          <select onChange={inputAddress} className="select">
            <option>거주하는 지역을 선택하세요</option>
            {region.map((city) => {
              return <option>{city}</option>;
            })}
          </select>
        </div>
        <br />
        <br />
        {/* <div style={{ fontSize: "17px", color: "#92198D" }}>기존 지역 :</div> */}
        <br />
        <br />
        <br />
        {/* 회원정보 수정 */}
        {openUserInfo ? (
          <div className="updateUserInfo">
            <div>회원정보 수정을 원하십니까?</div>
            <br />

            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              maxLength="50"
              value={password.password}
              onChange={inputPassword}
            ></input>

            <br />
            <button
              onClick={() => {
                if (newUsername.newUsername === "") {
                  return alert("닉네임을 입력해주세요");
                }
                if (isvalid(newUsername.newUsername) === "blank") {
                  return alert("닉네임에 공백이 들어갈 수 없습니다");
                }
                if (
                  newAddress.newAddress === "" ||
                  newAddress.newAddress === "거주하는 지역을 선택하세요"
                ) {
                  return alert("지역을 선택해주세요");
                }
                // 현재 비밀번호를 확인하고 axios.update
                // 모달창 닫음(setopenUserInfo(false))
              }}
            >
              확인
              {/* onClick={() => {}} */}
            </button>
          </div>
        ) : (
          ""
        )}
        <br />
        <div className="MypageButton">
          <button
            onClick={() => {
              setopenUserInfo(!openUserInfo);
            }}
          >
            {openUserInfo ? "회원정보 수정 취소" : "회원정보 수정"}
            {/* 회원정보 수정 */}
          </button>
          <button
            onClick={() => {
              setopenPassword(!openPassword);
            }}
          >
            {openPassword ? "비밀번호 변경 취소" : "비밀번호 변경"}
          </button>
          <button
            onClick={() => {
              setopenWithdrawal(!openWithdrawal);
            }}
          >
            {openWithdrawal ? "회원탈퇴 취소" : "회원탈퇴"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
