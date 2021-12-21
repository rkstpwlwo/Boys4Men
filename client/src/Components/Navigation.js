import React from "react";
import "./Components.css";
import "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({ isLogin, LogoutHandler }) {
  return (
    <div>
      <div id="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav_element">M-Music</div>
        </Link>
        <Link to="/board" style={{ textDecoration: "none" }}>
          <div className="nav_element">게시판</div>
        </Link>
        {/* {isLogin ? ( */}
        <Link to="/Mypage" style={{ textDecoration: "none" }}>
          <div className="nav_element">나의 페이지</div>
          {/* 나의 페이지 클릭시 accessTokenRequest 함수 실행 */}
        </Link>

        {isLogin ? (
          <div className="nav_element">로그아웃</div> // onClick={() => LogoutHandler 실행}
        ) : (
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <div className="nav_element">로그인</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
