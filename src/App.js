import React, {useRef} from 'react';
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import InputMultiSample from "./InputMultiSample";
import UserList from "./UserList";

function App() {

    const users = [
        {
            id: 1,
            username: 'kim',
            email: 'naver.com'
        },
        {
            id: 2,
            username: 'Lee',
            email: 'kakao.com'
        },
        {
            id: 3,
            username: 'park',
            email: 'uah.com'
        }
    ];
    const nextId = useRef(4);

    const onCreate = () => {
        console.log(nextId.current);// 4
        nextId.current += 1;
    }

    return (
        <>
            <Counter/>
            <Wrapper>
                <Hello color="pink" isSpecial/>
                {/* ={true} 생략가능*/}
                <Hello name="react" color="red"/>
            </Wrapper>

            <InputSample/>
            <InputMultiSample/>


            <UserList users={users}/>
        </>
    );
}

export default App;
