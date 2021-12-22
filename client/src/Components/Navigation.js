import React from "react";
import "./Components.css";
import "react-router-dom";
import { Link,useHistory } from "react-router-dom";
import { useState } from "react";

function Nav({ isLogin, LogoutHandler }) {
  const history=useHistory();
  return (
    <div>
      <div id="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav_element" style={{ fontSize: "50px" }}>
            M-Music
          </div>
        </Link>
        <Link to="/board" style={{ textDecoration: "none" }}>
          <div className="nav_element">
            게시판<i className="fas fa-pen"></i>
          </div>
        </Link>
        {/* {isLogin ? ( */}
        {/* <Link to="/Mypage" style={{ textDecoration: "none" }}> */}
        <Link onClick={()=>{
          if(isLogin){
            history.push("/Mypage");
          }
          else{
            alert('로그인후 접근 가능')
          }
        }} style={{ textDecoration: "none" }}>
          <div className="nav_element">
            마이 페이지 <i className="fas fa-user"></i>
          </div>
          {/* 나의 페이지 클릭시 accessTokenRequest 함수 실행 */}
        </Link>

        {isLogin ? (
          <div className="nav_element">로그아웃</div> // onClick={() => LogoutHandler 실행}
        ) : (
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <div className="nav_element">
              로그인 <i class="fas fa-power-off"></i>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
