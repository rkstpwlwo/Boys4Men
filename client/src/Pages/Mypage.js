import { useState,useEffect } from "react";
import React from "react";
import axios, { Axios } from "axios";
import { useHistory } from "react-router-dom";

function Mypage({ accessToken, region, url,setAccessToken,setLogin }) {
  // 기존에 나와야할 정보는 아이디 ,닉네임 ,MBTI,지역
  const [userInfo,setUserInfo]=useState({
    id:'',
    name:'',
    city:'',
    mbti:''
  })
  const [insertMode,setInsertMode]=useState(false);
  const history=useHistory();

  function authRequest(){
    if(password===''){
      alert('비밀번호를 입력해주세요');
    }
    else{
      axios({
        method:'POST',
        url:`${url}/user/authCheck`,
        data:{password:password},
        headers:{authorization:`Bearer ${accessToken.accessToken}`}
      }).then((res)=>{
        setInsertMode(true);
        setnewAddress({newAddress:userInfo.city});
        setnewUsername({newUsername:userInfo.name});
        setopenUserInfo(false);
      }).catch((err)=>{
        if(err.response.status===403){
          alert('비밀번호 오류');
        }
      })
    }
  }
  // 유저정보를 요청하는 API
  function accessTokenRequest() {
    axios({
      method:'GET',
      url:`${url}/user/info`,
      headers:{authorization:`Bearer ${accessToken.accessToken}`}
    }).then((res)=>{
      if(res.status===200){
        setUserInfo({
          id:res.data.id,
          name:res.data.userName,
          city:res.data.city,
          mbti:res.data.mbti
        })
      }
    }).catch((err)=>{
      if(err.response.status===401){
        alert('유효하지 않은 토큰입니다.');
      }
      else{
        alert('server error');
      }
    })
  }

  useEffect(()=>{
    accessTokenRequest(); //유저의 정보를 받아옴
  },[]);

  // 변경 사항
  const [newUsername, setnewUsername] = useState({ newUsername: "" }); // 변경할 닉네임
  const [newAddress, setnewAddress] = useState({ newAddress: "" }); // 변경할 주소지
  const [changedpassword, setcheckPassword] = useState({ changedpassword: "" }); // 새로 변경할 비밀번호
  const [checkchangedpassword, setcheckchangedpassword] = useState({
    checkchangedpassword: "",
  }); // 변경할 비밀번호 확인
  const [password,setPassword]=useState("");
  const [openUserInfo, setopenUserInfo] = useState(false); // 회원정보 수정을 위해 열리는 모달창
  const [openPassword, setopenPassword] = useState(false); // 비밀번호 변경을 위해 열리는 모달창
  const [openWithdrawal, setopenWithdrawal] = useState(false); // 회원탈퇴를 위해 열리는 모달창

  // 유저가 입력한 값으로 수정
  function inputnewUsername(e) {
    setnewUsername({ newUsername: e.target.value });
    console.log(newUsername);
  }
  function inputPassword(e) {
    setPassword(e.target.value);
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
    if(!insertMode){
      setPassword('');
      setopenUserInfo(!openUserInfo);
    }
    else{
      setPassword('');
      axios({
        method:'PATCH',
        url:`${url}/user/info`,
        data:{userName:newUsername.newUsername,city:newAddress.newAddress},
        headers:{authorization:`Bearer ${accessToken.accessToken}`}
      }).then((res)=>{
        setInsertMode(false);
        accessTokenRequest();
      }).catch((err)=>{
        if(err.response.status===401){
          alert('유효하지않은 토큰입니다.');
        }
        else{
          alert('server error');
        }
      })
    }
  }
  // 비밀번호 변경 API
  function putPassword() {
    axios({
      method:'POST',
      url:`${url}/user/authCheck`,
      data:{password:password},
      headers:{authorization:`Bearer ${accessToken.accessToken}`}
    }).then((res)=>{
      if(res.status===200){
        axios({
          method:'PATCH',
          url:`${url}/user/password`,
          data:{password:changedpassword.changedpassword},
          headers:{authorization:`Bearer ${accessToken.accessToken}`}
        }).then((res)=>{
          alert('비밀번호 변경완료');
          setopenPassword(false);
        });
        setPassword('');
        setcheckPassword({changedpassword:''});
        setcheckchangedpassword({checkchangedpassword:''});
      }
    }).catch((err)=>{
      setPassword('');
      setcheckPassword({changedpassword:''});
      setcheckchangedpassword({checkchangedpassword:''});
      if(err.response.status===403){
        alert('비밀번호 오류');
      }
      else if(err.response.status===401){
        alert('유효하지않은 토큰입니다.');
      }
      else{
        alert('server error');
      }
    })
  }

  // 회원탈퇴 API
  function deleteUserInfo() {
    axios({
      method:'POST',
      url:`${url}/user/authCheck`,
      data:{password:password},
      headers:{authorization:`Bearer ${accessToken.accessToken}`}
    }).then((res)=>{
      if(res.status===200){
        axios({
          method:'DELETE',
          url:`${url}/user`,
          headers:{authorization:`Bearer ${accessToken.accessToken}`}
        }).then((res)=>{
          if(res.status===204){
            alert('회원탈퇴 완료');
            history.push('/');
            setAccessToken({accessToken:''});
            setLogin(false);
            setPassword('');
          }
        })
      }
    }).catch((err)=>{
      setPassword('');
      if(err.response.status===403){
        alert('비밀번호 오류');
      }
      else if(err.response.status===401){
        alert('유효하지 않은 토큰입니다.');
      }
      else{
        alert('server error');
      }
    })
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
            value={password}
            onChange={inputPassword}
          ></input>
          <br />
          <br />
          <button onClick={()=>{
            if(password===''){
              alert('비밀번호를 입력해주세요');
            }
            else{
              deleteUserInfo()
            }
          }}>
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
            value={password}
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
              putPassword();
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
          <div style={{ fontSize: "50px" }}>{userInfo.mbti}</div>
          <div>
            <img
              className="MBTIimg"
              src="https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            />
          </div>
        </div>
        아이디
        <input type="text" value={userInfo.id} disabled></input>
        <br />
        <br />
        닉네임
        {insertMode?<input
          type="text"
          value={newUsername.newUsername}
          maxLength="12"
          onChange={inputnewUsername}
        ></input>:
        <input
        type="text"
        value={userInfo.name}
        maxLength="12"
        onChange={inputnewUsername}
        disabled
      ></input>}
        <br />
        <br />
        <div>
          지역 변경
          {insertMode?
          <select onChange={inputAddress} className="select" key={userInfo.city} defaultValue={userInfo.city} style={{"marginLeft":"80px"}}>
            {region.map(city =><option  value={city}>{city}</option>)}
          </select>:
          <select onChange={inputAddress} className="select" style={{"marginLeft":"80px"}} key={userInfo.city} defaultValue={userInfo.city} disabled>
            {region.map(city =><option  value={city}>{city}</option>)}
          </select>}
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
              value={password}
              onChange={inputPassword}
            ></input>

            <br />
            <button onClick={authRequest}>
              확인
            </button>
          </div>
        ) : (
          ""
        )}
        <br />
        <div className="MypageButton">
          <button
            onClick={putUserInfo}>
            {insertMode ? "회원정보 수정 저장" : "회원정보 수정"}
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
