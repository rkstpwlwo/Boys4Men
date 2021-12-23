import "./GenrePage.css";
import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {GenreDetail} from "./GenreExplain";

function Punk() {
  // 초기화면을 위한 데이터(Genre이름, 이미지)를 요청하는 API
  return (
    <div id="Punk">
      <span>
        <img id="Punkimg" src="https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Punk.png"></img>
      </span>
      <div id="Punkdiv">Punk</div>
    </div>
  );
}
function Jazz() {
  return (
    <span id="Jazz">
      <img id="Jazzimg" src="https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Jazz.png"></img>
      <div id="Jazzdiv">Jazz</div>
    </span>
  );
}
function AlternativeRock() {
  return (
    <span id="AlternativeRock">
      <img id="AlternativeRockimg" src="https://project-genre-image.s3.ap-northeast-2.amazonaws.com/AlternativeRock.png"></img>
      <div id="AlternativeRockdiv">AlternativeRock</div>
    </span>
  );
}
function NewAge() {
  return (
    <span id="NewAge">
      <img id="NewAgeimg" src="https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Newage.png"></img>
      <div id="NewAgediv">NewAge</div>
    </span>
  );
}

function Pop() {
  return (
    <span id="Pop">
      <img id="Popimg" src="https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Pop.png"></img>
      <div id="Popdiv">Pop</div>
    </span>
  );
}
function Metal() {
  return (
    <span id="Metal">
      <img id="Metalimg" src="https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Metal.png"></img>
      <div id="Metaldiv">Metal</div>
    </span>
  );
}
function Hiphop() {
  return (
    <span id="Hiphop">
      <img id="Hiphopimg" src="https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Hiphop.png"></img>
      <div id="Hiphopdiv">Hiphop</div>
    </span>
  );
}
function Electronica() {
  return (
    <span id="Electornica">
      <img id="Electronicaimg" src="https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Electronica.png"></img>
      <div id="Electronicadiv">Electronica</div>
    </span>
  );
}
function Blues() {
  return (
    <span id="Blues">
      <img id="Bluesimg" src="https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Blues.png"></img>
      <div id="Bluesdiv">Blues</div>
    </span>
  );
}

function RandB() {
  return (
    <span id="RandB">
      <img id="RandBimg"  src={`https://project-genre-image.s3.ap-northeast-2.amazonaws.com/R&b.png`}></img>
      <div id="RandBdiv">R&#38;B</div>
    </span>
  );
}

function Reggae() {
  return (
    <span id="Reggae">
      <img id="Reggaeimg" src="https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Reggae.png"></img>
      <div id="Reggaediv">Reggae</div>
    </span>
  );
}

export default function Genre({setGenre}) {
  return (
    <genre id="genrecomponent">
      <ul id="genreul">
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('Punk')}}>
            <Punk />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('Jazz')}}>
            <Jazz />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('Alternative Rock')}}>
            <AlternativeRock />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('New age')}}>
            <NewAge />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('Pop')}}>
            <Pop />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('Metal')}}>
            <Metal />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('Hiphop')}}>
            <Hiphop />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('Electronica')}}>
            <Electronica />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('Blues')}}>
            <Blues />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('R&B')}}>
            <RandB />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/detail" onClick={()=>{setGenre('Reggae')}}>
            <Reggae />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
      </ul>
      {/* 여기까지가 Nav창 내용 */}
    </genre>
  );
}
