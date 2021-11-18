import React from 'react';

const Test6 = () => {

    const handleClick1 = () => {
        alert("클릭 이벤트1");
    }
    const handleClick2 = () => {
        alert("클릭 이벤트2");
    }
    const handleClick3 = () => {
        alert("클릭 이벤트3");
    }

    const aaa = (num) => {
        alert(num);
    }
    return (
        <div>
            <h2>이벤트 작성법</h2>
            <p>
                <button onClick = {handleClick1}>click1</button>
                <button onClick = {handleClick2}>click2</button>
                <button onClick = {handleClick3}>click3</button>
            </p>
            <p>
                <button onClick={ () => { alert("aaa") } }>click4</button>
                <button onClick={ () => console.log("aaa") }>click5</button>
                <button onClick={ () => alert("aaaasd") }>click6</button>
            </p>
            <p>
                <button onClick = { () => aaa(300) } >click</button>
                {/* 값을 전달할 경우 
                    이벤트 = { () => 함수명(값) }
                */}
            </p>
        </div>
    );
};

export default Test6;