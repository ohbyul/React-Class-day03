import React from 'react';

const Test2 = () => {

    const isLogin = true;
    const done1 = false;
    const done2 = undefined;
    const btnLogin = (isLogin) => {
        if(isLogin === true){
            return (<button>LOGIN</button>)
        }else{
            return (<button>LOGOUT</button>)
        }
    }

    return (
        <div>
            <h2> JSX 영역 : 삼항 , && , || </h2>
            <p> {isLogin === true ? '로그인' : '로그아웃'} </p>
            <p> {isLogin && '로그인'} </p>
            <p> {done1 || '로그아웃'} </p>
            <p> {done1 === false && '참값'} </p>
            {done2 || <h2>조회된 게시글이 없습니다.</h2>}
            <p>{btnLogin(isLogin)}</p>
            
        
            {/* 
                && , 삼항 연산자 , ||
                (조건식) ? (참) : (거짓)
                {조건 && 참결과}
                (조건 || 거짓결과)
                -undefined , null, false , '' 빈문자열 중 하나를 
                reture 할 경우 정상적인 화면 렌더링이 이루어지지않음 
            */}

        </div>
    );
};

export default Test2;