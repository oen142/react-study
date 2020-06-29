import React from 'react';
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";

function App() {
    return (
        <>
            <Counter/>
            <Wrapper>
                <Hello color="pink" isSpecial/>
                {/* ={true} 생략가능*/}
                <Hello name="react" color="red"/>
            </Wrapper>
        </>
    );
}

export default App;
