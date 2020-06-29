import React from "react";

function Hello({color, name, isSpecial}) {
    return (
        <div style={{
            color
        }}>
            {isSpecial && <b>*</b>}
            <b>{isSpecial? '스페셜하다!': '낫 스페셜'}</b>
            {/*
            null , false , undefinded
            */}
            안녕하세요 {name}</div>
    );

}

Hello.defaultProps = {
    name: '이름없음'
}
export default Hello;