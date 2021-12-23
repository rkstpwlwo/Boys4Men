import "./GenrePage.css";
import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
function Punk() {
  // 초기화면을 위한 데이터(Genre이름, 이미지)를 요청하는 API
  function getGenre() {
    return axios.get(`url/genre`).then((result) => {});
  }
  return (
    <div id="Punk">
      <span>
        <img id="Punkimg"></img>
      </span>
      <div id="Punkdiv">Punk</div>
    </div>
  );
}
function Jazz() {
  return (
    <span id="Jazz">
      <img id="Jazzimg"></img>
      <div id="Jazzdiv">Jazz</div>
    </span>
  );
}
function AlternativeRock() {
  return (
    <span id="AlternativeRock">
      <img id="AlternativeRockimg"></img>
      <div id="AlternativeRockdiv">AlternativeRock</div>
    </span>
  );
}
function NewAge() {
  return (
    <span id="NewAge">
      <img id="NewAgeimg"></img>
      <div id="NewAgediv">NewAge</div>
    </span>
  );
}

function Pop() {
  return (
    <span id="Pop">
      <img id="Popimg"></img>
      <div id="Popdiv">Pop</div>
    </span>
  );
}
function Metal() {
  return (
    <span id="Metal">
      <img id="Metalimg"></img>
      <div id="Metaldiv">Metal</div>
    </span>
  );
}
function Hiphop() {
  return (
    <span id="Hiphop">
      <img id="Hiphopimg"></img>
      <div id="Hiphopdiv">Hiphop</div>
    </span>
  );
}
function Electronica() {
  return (
    <span id="Electornica">
      <img id="Electronicaimg"></img>
      <div id="Electronicadiv">Electronica</div>
    </span>
  );
}
function Blues() {
  return (
    <span id="Blues">
      <img id="Bluesimg"></img>
      <div id="Bluesdiv">Blues</div>
    </span>
  );
}

function RandB() {
  return (
    <span id="RandB">
      <img id="RandBimg"></img>
      <div id="RandBdiv">R&#38;B</div>
    </span>
  );
}

function Reggae() {
  return (
    <span id="Reggae">
      <img id="Reggaeimg"></img>
      <div id="Reggaediv">Reggae</div>
    </span>
  );
}

export default function Genre() {
  return (
    <genre id="genrecomponent">
      <ul id="genreul">
        <li>
          <Link to="/genre/Punk">
            <Punk />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/Jazz">
            <Jazz />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/AlternativeRock">
            <AlternativeRock />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/NewAge">
            <NewAge />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/Pop">
            <Pop />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/Metal">
            <Metal />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/Hiphop">
            <Hiphop />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/Electronica">
            <Electronica />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/Blues">
            <Blues />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/RandB">
            <RandB />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
        <li>
          <Link to="/genre/Reggae">
            <Reggae />
          </Link>
          {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
        </li>
      </ul>
      {/* 여기까지가 Nav창 내용 */}
    </genre>
  );
}
