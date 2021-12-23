import "./MbtiPage.css";
import { useState } from "react";
import Axios from "axios";

// const request=()=>{
//     Axios({
//       method:'get',
//       url:'http://localhost:44165/',
//       data:{data:data}
//     }).then((res)=>{
//       console.log(res.data);
//       setServerData(res.data);
//     })
//   }
export function ISTJComponent() {
  return (
    <div id="ISTJComponent">
      <div>
        <strong>ISTJ</strong>
      </div>
      <ul>
        <li>전체 성격중 13%를 차지하는 유형입니다.</li>
        <li>
          실용적인 논리력을 가지고 있고 헌신적으로 임무를 수행한다고 평가를
          받습니다.
        </li>
        <li>책임감이 강하고 성실한 성격입니다.</li>
        <li>원칙과 규칙을 중요하게 생각하고 직설적으로 말을 합니다.</li>
        <li>시끄러운 곳보다 조용한 곳을 선호합니다.</li>
      </ul>
    </div>
  );
}
export function ISTPComponent() {
  return (
    <div id="ISTPComponent">
      <div>
        <strong>ISTP</strong>
      </div>
      <ul>
        <li>모든 분야에 재주가 많고 대담합니다.</li>
        <li>직장에서 같이 일하고 싶은 유형의 사람입니다.</li>
        <li>책임감이 강하고 성실한 성격입니다.</li>
        <li>노력에 비해서 성과를 잘내는 사람입니다.</li>
        <li>논리적이고 정확한것을 중요하게 생각합니다.</li>
      </ul>
    </div>
  );
}

export function ISFJComponent() {
  return (
    <div id="ISFJComponent">
      <div>
        <strong>ISFJ</strong>
      </div>
      <ul>
        <li>조용하고 차분하며 따스한 성격을 가지고 있습니다.</li>
        <li>주변의 가족,애인,친구들을 소중히 여기는 유형입니다.</li>
        <li>본인이 맡은 역할은 최선을 다하는 책임감 있는 유형입니다.</li>
        <li>배려심이 좋고 인정이 많습니다.</li>
        <li>약속을 되도록 지키려하는 유형입니다.</li>
      </ul>
    </div>
  );
}
export function ISFPComponent() {
  return (
    <div id="ISFPComponent">
      <div>
        <strong>ISFP</strong>
      </div>
      <ul>
        <li>미적 감각이 뛰어납니다.</li>
        <li>말보다는 행동으로 표현하는 유형입니다.</li>
        <li>지루한 일상을 싫어하고 새로운 것을 추구합니다.</li>
        <li>변화에 빨리 적응할 수 있습니다.</li>
        <li>호기심이 많고 새로운 것에 도전하는 것을 좋아합니다.</li>
      </ul>
    </div>
  );
}
export function INTJComponent() {
  return (
    <div id="INTJComponent">
      <div>
        <strong>INTJ</strong>
      </div>
      <ul>
        <li>계획을 철처하게 세우는 유형입니다.</li>
        <li>직관력과 통찰력이 좋습니다.</li>
        <li>독립적인 모습을 보입니다.</li>
        <li>감정표현을 자제하는 편입니다.</li>
        <li>개인주의 성격이 강합니다.</li>
      </ul>
    </div>
  );
}
export function INTPComponent() {
  return (
    <div id="INTPComponent">
      <div>
        <strong>INTP</strong>
      </div>
      <ul>
        <li>아이디어가 많습니다.</li>
        <li>귀찮은 걸 싫어합니다.</li>
        <li>논리와 분석으로 문제 해결하는 것을 즐깁니다.</li>
        <li>개인주의 성향이 있습니다.</li>
        <li>끊임없이 새로운 지식을 습득하는 유형입니다.</li>
      </ul>
    </div>
  );
}
export function INFJComponent() {
  return (
    <div id="INFJComponent">
      <div>
        <strong>INFJ</strong>
      </div>
      <ul>
        <li>창의력과 직관이 좋습니다.</li>
        <li>감성적이면서도 이성적입니다.</li>
        <li>다정하고 친절합니다.</li>
        <li>도덕관념이 높습니다.</li>
        <li>상황을 다각도로 바라보려 합니다.</li>
      </ul>
    </div>
  );
}
export function INFPComponent() {
  return (
    <div id="INFPComponent">
      <div>
        <strong>INFP</strong>
      </div>
      <ul>
        <li>상냥한하고 이타적입니다.</li>
        <li>감정기복이 심합니다.</li>
        <li>이상을 추구합니다.</li>
        <li>최대한 트러블을 만들지 않기 위해 노력합니다</li>
        <li>세심한 성격을 가지고 있습니다.</li>
      </ul>
    </div>
  );
}
export function ESTJComponent() {
  return (
    <div id="ESTJComponent">
      <div>
        <strong>ESTJ</strong>
      </div>
      <ul>
        <li>책임지는 것을 선호합니다.</li>
        <li>논리에 따라 결정을 내립니다.</li>
        <li>사회활동에서 주도적 역할을 맡는 편입니다.</li>
        <li>새로운 접근법,시도를 좋아하지 않습니다.</li>
        <li>실리적이고 현실적입니다.</li>
      </ul>
    </div>
  );
}
export function ESTPComponent() {
  return (
    <div id="ESTPComponent">
      <div>
        <strong>ESTP</strong>
      </div>
      <ul>
        <li>직접나가서 몸으로 부딪히는것을 좋아합니다.</li>
        <li>낙천적이고 긍정적입니다.</li>
        <li>스릴과 모험을 즐깁니다.</li>
        <li>매사에 도전적입니다.</li>
        <li>발표하거나 이야기하는 것을 두려워 하지 않습니다.</li>
      </ul>
    </div>
  );
}
export function ESFJComponent() {
  return (
    <div id="ESFJComponent">
      <div>
        <strong>ESFJ</strong>
      </div>
      <ul>
        <li>외향적인 성격입니다.</li>
        <li>팀워크로 일할 때 협력을 잘합니다.</li>
        <li>실용적이고 세부적인것을 잘 살핍니다.</li>
        <li>체계적입니다.</li>
        <li>다른사람들의 생각을 지나치게 의식합니다.</li>
      </ul>
    </div>
  );
}
export function ESFPComponent() {
  return (
    <div id="ESFPComponent">
      <div>
        <strong>ESFP</strong>
      </div>
      <ul>
        <li>사교적이고 활기찹니다.</li>
        <li>창의적입니다.</li>
        <li>바로 결과가 보이는 일을 좋아합니다.</li>
        <li>자유롭고 즐거운 분위기에서 일하는 것을 선호합니다.</li>
        <li>장기적인 계획이 짜인 업무를 맡으면 스트레스를 받습니다.</li>
      </ul>
    </div>
  );
}
export function ENTJComponent() {
  return (
    <div id="ENTJComponent">
      <div>
        <strong>ENTJ</strong>
      </div>
      <ul>
        <li>통솔력이 있고 활동적입니다.</li>
        <li>배움에 있어서 철저합니다.</li>
        <li>자존감이 높습니다.</li>
        <li>야망이 있습니다.</li>
        <li>승부욕이 지나쳐서 오히려 일을 망칠수 있습니다.</li>
      </ul>
    </div>
  );
}
export function ENTPComponent() {
  return (
    <div id="ENTPComponent">
      <div>
        <strong>ENTP</strong>
      </div>
      <ul>
        <li>상대방의 특징을 잘 파악합니다.</li>
        <li>자존감이 높고 나에 대한 확신이 강합니다.</li>
        <li>두뇌 회전이 빠릅니다.</li>
        <li>직관력이 좋습니다.</li>
        <li>개인주의적이고 독립적입니다.</li>
      </ul>
    </div>
  );
}
export function ENFJComponent() {
  return (
    <div id="ENFJComponent">
      <div>
        <strong>ENFJ</strong>
      </div>
      <ul>
        <li>친절하고 사교적입니다.</li>
        <li>계획 세우는 것을 좋아합니다.</li>
        <li>카리스마와 영향력이 있습니다.</li>
        <li>표현하는 것을 잘합니다.</li>
        <li>성실하고 호기심이 많습니다.</li>
      </ul>
    </div>
  );
}
export function ENFPComponent() {
  return (
    <div id="ENFPComponent">
      <div>
        <strong>ENFP</strong>
      </div>
      <ul>
        <li>활기차며 재능이 많습니다.</li>
        <li>상상력이 풍부합니다.</li>
        <li>인기가 많은 스타일입니다.</li>
        <li>타인에게 친절하고 이해심이 많습니다.</li>
        <li>스트레스에 취약하기도 합니다.</li>
      </ul>
    </div>
  );
}
