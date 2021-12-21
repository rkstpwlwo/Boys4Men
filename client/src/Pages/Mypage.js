import { useState } from "react";
import React from "react";
import { Redirect } from "react-router-dom";

function Mypage({ accessToken, region }) {
  // 기존에 나와야할 정보는 아이디 ,닉네임 ,MBTI,지역
  const [userId, setUserId] = useState({ userId: "" }); // 아이디 (수정 불가)
  const [Username, setUsername] = useState({ Username: "" }); // 원래 닉네임 (수정 가능)
  const [Address, setAddress] = useState({ Address: "" }); // 원래 주소 (수정 가능)
  const [MBTI, setMBTI] = useState({ MBTI: "" }); // 유저의 mbti (수정 불가)

  // 유저정보를 요청하는 API
  function accessTokenRequset() {
    // axios
    //   .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
    //   .then((result) => {});
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
    // axios.patch(url,{userName : newUsername.newUsername ,city : newAddress.newAddress },
    // {headers : {Authorization : `Bearer ${accessToken}`}}).then((result) => {
    // })
  }
  // 비밀번호 변경 API
  function putPassword() {
    // axios.patch(
    //   url,
    //   { password: changedpassword.changedpassword },
    //   { headers: { Authorization: `Bearer ${accessToken}` } }
    // );
  }

  // 회원탈퇴 API
  function deleteUserInfo() {
    // axios.delete(url, { headers: { Authorization: `Bearer ${accessToken}` } });
    // 삭제 성공시 204 상태코드만 반환하므로 message가 오지 않는다
  }
  return (
    <div className="Mypage">
      {/* 회원탈퇴 버튼*/}
      {openWithdrawal ? (
        <div className="checkpassword">
          <br />
          <br />
          <br />
          <div>정말로 회원탈퇴 하시겠습니까?</div>
          <br />
          <div>회원탈퇴를 원하신다면 비밀번호를 입력해주세요</div>
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
              // axios.delete(url,{headers : {Authoriation : `Bearer ${accessToken}`}})
              // 성공하면 홈화면으로 렌더링 (로그아웃된 상태로)
            }}
          >
            확인
          </button>
          <br />
          <br />
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
          <br />
          <div>비밀번호를 변경합니다</div>
          <br />
          <div>비밀번호 변경을 원하시면 현재 비밀번호를 입력해주세요</div>
          <input
            type="password"
            placeholder="현재 비밀번호"
            value={password.password}
            onChange={inputPassword}
          ></input>
          <br />
          <br />
          <div>변경할 비밀번호를 입력해주세요</div>
          <input
            type="password"
            placeholder="변경할 비밀번호(5자 이상)"
            value={changedpassword.changedpassword}
            onChange={inputchangedpassword}
          ></input>
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
              // 비밀번호 변경을 성공하면 비밀번호를 변경했습니다 alert창
            }}
          >
            확인
          </button>
          <br />
          <br />
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
          <div>MBTI</div>
          <div>MBTI 이미지가 들어감</div>
          <input placeholder="유저의 MBTI 정보" disabled></input>
        </div>
        <div>아이디</div>
        <input type="text" placeholder="유저의 아이디" disabled></input>
        <br />
        <br />
        <div>닉네임</div>
        <input
          type="text"
          placeholder="유저의 닉네임(수정 가능)"
          value={newUsername.newUsername}
          maxLength="12"
          onChange={inputnewUsername}
        ></input>

        <br />
        <br />
        <div>지역 변경</div>
        <select onChange={inputAddress} className="select">
          <option>거주하는 지역을 선택하세요</option>
          {region.map((city) => {
            return <option>{city}</option>;
          })}
        </select>
        <br />
        <br />
        <div style={{ fontSize: "17px", color: "#92198D" }}>기존 지역 :</div>
        <br />
        <br />
        <br />
        {/* 회원정보 수정 */}
        {openUserInfo ? (
          <div className="updateUserInfo">
            <div>회원정보 수정을 원하시면 비밀번호를 입력해주세요</div>
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
              }}
            >
              회원정보 수정하기
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
