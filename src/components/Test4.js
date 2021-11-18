import React from 'react';


const Sub = ( {msg, name, age, addr, tel, color, isLog} ) => {
    //컴포넌트명은 앞글자 무조건 대문자
    
    return (
        <div style={{border : `2px solid ${color}`, padding :20, margin:20}}>
            {/* 템플릿 리터널 ``  ${}  */}
            <h2 style={{backgroundColor:color}}>타이틀 : {msg}</h2>
            <ul>
                <li>이름 : {name} </li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>전화 : {tel}</li>
                <li>컬러 : {color}</li>
                <li>로그인여부 : {isLog === true ? '로그인' : '로그아웃'} </li>
            </ul>
        </div>
    );
};


const Test4 = () => {
    const title = '부모에서 자식에 값을 전달';
    return (
        <div>
            <Sub 
                msg = {title}
                name = "이영애"
                //숫자, 논리값은 {}안에 담아서 전달해준다.
                age = {33}
                addr = '반포동'
                tel = "010123123"
                color = "tomato"
                isLog = { true }
            />
        </div>
    );
};

export default Test4;