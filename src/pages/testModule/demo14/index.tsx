import React, { memo, useState } from "react";

function useUemo () {
    const Child = () => {
        console.log('子组件?')
        return(
            <div>我是一个子组件</div>
        );
    }
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={(e) => { setCount(count+1) }}>加1</button>
            <p>count:{count}</p>
            <Child />
        </>
    )
};

function useUemo1 () {
    const Child = () => {
        console.log('子组件ChildMemo?')
        return(
            <div>我是一个子组件</div>
        );
    }
    const ChildMemo = memo(Child);
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={(e) => { setCount(count+1) }}>加1</button>
            <p>count:{count}</p>
            <ChildMemo />
        </>
    )
};

// export default useUemo;
export default useUemo1;
