import React from 'react';
import PropTypes from 'prop-types';

const Test5Sub = ({name,age,addr,tel,color,isLog}) => {
    return (
        <div style={{
            border:'4px solid skyblue',
            padding : 20,
            margin : 20
            }}>
            
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

export default Test5Sub;


/*
PropTypes는 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기(Validator)를 내보냅니다. (공식문서)

여러컴포넌트가 부모에서 자식에 값을 전달해주지만 예로 넘버로 전달해주지만
그안에서 사용하는것이 넘버가 아니고 문자다라면 문제가 생긴다(버그) : 버그방지
props 의 타입을 지정해 놓고 사용

import PropType from 'prop-types';
컴포넌트명.propTypes = {
    props명 : PropType.타입.isRequied
    props명 : PropType.타입
}
*/
Test5Sub.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.string.isRequired,
    addr : PropTypes.string,
    tel : PropTypes.string,
    color : PropTypes.string,
    isLog : PropTypes.bool
};

//props의 초기값을 정의합니다.
/*
컴포넌트명.defaultProps = {
    props명 : 값
}
*/
Test5Sub.defaultProps = {
    name : '아무개',
    age : 20,
    addr : '서울',
    tel : '01012345678',
    color :'hotpink',
    isLog : true
};