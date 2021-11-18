import React from 'react';
import Test5Sub from './Test5Sub';

const Test5 = () => {
    return (
        <div>
            <Test5Sub 
                name = "이영애"
                age = {31}
                addr = '반포동'
                tel = "010123123"
                color = "tomato"
                isLog = { true }
            />
            <hr/>
            <Test5Sub 
                name = "정우성"
                addr = '서초동'
                tel = "010123123"
            />
            <hr/>
            <Test5Sub />
            
        </div>
    );
};

export default Test5;