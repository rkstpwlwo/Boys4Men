// import React from "react";
// import "../App.css";

// function Mbti() {
//   return (
//     <div className="nav">
//       <div>INTP</div>
//       <div>INFP</div>
//     </div>
//   );
// }

// export default Mbti;




import '../../App.css'
import React from 'react';

export function ISTJ(){
    return (
      <span id="ISTJ" > ISTJ</span>
    )
}
export function ISTP(){
    return (
        <span id="ISTP">ISTP</span>
    )
}
export function ISFJ(){
    return (
       <span id="ISFJ">ISFJ</span>
    )
}
export function ISFP(){
    return (
        <span id="ISFP">ISFP</span>
    )
}

export function INTJ(){
    return (
        <span id="INTJ">INTJ</span>
    )
}
export function INTP(){
    return (
       <span id="INTP">INTP</span>
    )
}
export function INFJ(){
    return (
        <span id="INFJ">INFJ</span>
    )
}
export function INFP(){
    return (
        <span id="INFP">INFP</span>
    )  
}
export function ESTJ(){
    return (
        <span id="ESTJ">ESTJ</span>
    )
}

export function ESTP(){
    return (
        <span id="ESTP">ESTP</span>
    )
}
export function ESFJ(){
    return (
      <span id="ESFJ">ESFJ</span>
    )
}
export function ENTJ(){
    return (
        <span id="ENTJ">ENTJ</span>
    )
}
export function ESFP(){
    return (
        <span id="ESFP">ESFP</span>
    )
}

export function ENTP(){
    return (
        <span id="ENTP">ENTP</span>
    )
}
export function ENFJ(){
    return (
        <span id="ENFJ">ENFJ</span>
    )
}
export function ENFP(){
    return (
        <span id="ENFP">ENFP</span>
    )
}


function IsType (){
    return (
    <div className='IsType'>
    <ISTJ/>
    <ISTP/>
    <ISFJ/>
    <ISFP/>
    </div>
    )
}
   
function InType (){
    return (
   
    <div className='InType'>
    <INTJ/>
    <INTP/>
    <INFJ/>
    <INFP/>
    </div>
    )
}
   
function EsType (){
    return (
   
    <div className='EsType'>
    <ESTJ/>
    <ESTP/>
    <ESFJ/>
    <ESFP/>
    </div>
    )    
}
   
function EnType (){
    return (
    <div className='EnType'>
    <ENTJ/>  
    <ENTP/>
    <ENFJ/>
    <ENFP/>
    </div>
    )
}

export function Mbti(){
    return (
      <div className="mbti">
       <IsType/>
       <InType/>
       <EsType/>
       <EnType/>
      </div>
    )
   }