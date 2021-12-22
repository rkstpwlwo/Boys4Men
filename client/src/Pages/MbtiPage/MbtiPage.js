import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./MbtiPage.css"
import axios from "axios";
import {ISTJ,ISTP,ISFJ,ISFP,INTJ,INTP,INFJ,INFP,ESTJ,ESTP,ESFJ,ESFP,ENTJ,ENTP,ENFJ,ENFP}from "./MbtiKind.js"
//여기에 axios를 써서 각각 만들어주자
//메뉴는 main tag가져와서 삭제
// import {mypage,board,login, MyPage} from '../Nav/nav'
export default function MbtiRouter(){
//  axios.get('./http://localhost:3004/genre/istp',)
//  let ISTJ =document.getElementById('ISTJ')
//  document.removeChild(ISTJ)
// // onClick={ document.removeChild(ISTJ)}
  // if(window.location("http://localhost:3008/mbti/istj")){
  //   return <div>내목소리 들리니?</div>
  // }
  // axios.post("http://localhost:3008/mbti/istj").then()
//onClick={()=>window.location.reload("http://localhost:3008/mbti/istj")}
 let port = window.location.port
  return(
    <BrowserRouter>
        <div>
          <main id='main'>
            <ul>
              <li onClick={()=>window.location.reload(`http://localhost:${port}/mbti/istj`)} >
              <Link to="/mbti/istj" id='istj' ><ISTJ/></Link>  {/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>
              <li  onClick={()=>window.location.reload(`http://localhost:${port}/mbti/intj`)}>
                <Link to="/mbti/intj" id='intj'><INTJ/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>    
              <li  onClick={()=>window.location.reload("http://localhost:3008/mbti/estj")}>
                <Link to="/mbti/estj" id='estj'><ESTJ/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/entj")}>
                <Link to="/mbti/entj"  id='entj'><ENTJ/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>    
              <li  onClick={()=>window.location.reload("http://localhost:3008/mbti/istp")}>
                <Link to="/mbti/istp" id='istp'><ISTP/></Link>
              </li>
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/intp")}>
                <Link to="/mbti/intp" id='intp'><INTP/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/estp")}>
                <Link to="/mbti/estp" id='estp'><ESTP/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/entp")}>
                <Link to="/mbti/entp"  id='entp'><ENTP/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/isfj")}>
                <Link to="/mbti/isfj" id='isfj'><ISFJ/></Link>
              </li>
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/infj")}>
                <Link to="/mbti/infj" id='infj'><INFJ/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>
 
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/esfj")}>
                <Link to="/mbti/esfj" id='esfj'><ESFJ/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>
       
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/ebfj")}>
                <Link to="/mbti/enfj"  id='enfj'><ENFJ/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/isfp")}>
                <Link to="/mbti/isfp" id='isfp'><ISFP/></Link>
              </li>
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/infp")}>
                <Link to="/mbti/infp" id='infp'><INFP/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
            </li>
            <li onClick={()=>window.location.reload("http://localhost:3008/mbti/esfp")}>
                <Link to="/mbti/esfp" id='esfp'><ESFP/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>
              <li onClick={()=>window.location.reload("http://localhost:3008/mbti/enfp")}>
                <Link to="/mbti/enfp" id='enfp'><ENFP/></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
              </li>
            </ul>
          </main>
          <div class="explain">②&darr;원하는 장르를 눌러보세요.(로그인을 하시면 더 좋은 서비스를 해드리겠습니다.^^)</div>
    {/* 여기까지가 Nav창 내용 */}
        </div>
            {/* 여기까지가 Nav창 내용 */}
            <Switch>
          <Route path="/mbti/istj" >
            </Route>
            <Route path="/mbti/istp">
            {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route path="/mbti/isfj">
            {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route path="/mbti/isfp">
            {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route exact path="/mbti/intj">
            {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route path="/mbti/intp">
             {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route path="/mbti/infj">
            {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route path="/mbti/infp">
            {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route exact path="/mbti/estj">
            {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route path="/mbti/estp">
            {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route path="/mbti/esfj">
            {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route path="/mbti/esfp">
            {/* ISTJ 눌렀을때 칸 */}
            </Route>
            <Route exact path="/mbti/entj">
            {/* ISTJ 눌렀을때 칸 */} //여기서부터
            </Route>
            <Route path="/mbti/entp">
            {/* EBTP 눌렀을때 칸 */}
            </Route>
            <Route path="/mbti/enfj">
             {/* EBFJ 눌렀을때 칸 */}
            </Route>
            <Route path="/mbti/enfp">
                abcd
              {/* ENFP 눌렀을때 칸 */}
            </Route>
          </Switch>
      </BrowserRouter>
    )
   }
   
 