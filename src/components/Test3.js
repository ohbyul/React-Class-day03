import React from 'react';
/*
const Test3Sub = ( props ) => {
    //basic
    return (
        <div style={{borderBottom : '1px solid tomato', margin :10 }}>
            <h3>Test3Sub 자식 컴포넌트</h3>
            <h4>이름 : {props.name} {(typeof props.name)}
            / 나이 : {props.age} {(typeof props.age)}
            </h4>
        </div>
    );
};
*/
/*
const Test3Sub = ( props ) => {
    //비구조할당,구조분해
    const {name,age} = props;

    return (
        <div style={{borderBottom : '1px solid tomato', margin :10 }}>
            <h3>Test3Sub 자식 컴포넌트</h3>
            <h4>이름 : {name} {(typeof name)}
            / 나이 : {age} {(typeof age)}
            </h4>
        </div>
    );
};
*/
const Test3Sub = ( {name,age} ) => {
    //props 생략하고 넣은것, {} 안에 넣어야한다. 그냥 키받는게 아니므로
    return (
        <div style={{borderBottom : '1px solid tomato', margin :10 }}>
            <h3>Test3Sub 자식 컴포넌트</h3>
            <h4>이름 : {name} {(typeof name)}
            / 나이 : {age} {(typeof age)}
            </h4>
        </div>
    );
};

const Test3 = () => {
    
    const data1 = {name:'강아지' , age: 2};
    const data2 = {name:'고양이' , age: 3};

    return (
        <>
            <h3>부모에서 자식에 값을 전달할때</h3>
            <h3>자식이 부모에서 값을 받아올때</h3>
            <hr />
            {/* <자식컴포넌트 props명 ="값" props명 ={상태값,상태함수,이벤트함수명 등} */}
            <Test3Sub name="전지현" age="30" />
            {/* 문자는 "" 안에 / 숫자,논리값은 {} 안에 써야한다. */}
            <Test3Sub name="송혜교" age={22} />

            <Test3Sub name={data1.name} age={data1.age} />
            <Test3Sub name={data2.name} age={data2.age} />
            {/* ...복사(키) */}
            <Test3Sub {...data1} />
            <Test3Sub {...data2} />
        </>
    );
};

export default Test3;