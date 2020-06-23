import React, {useState,  useMemo, useEffect, useRef} from "react";

function Example4() {
    const [count, setCount] = useState(1);

    const prevCountRef = useRef(1);
    const prevCount = prevCountRef.current;
    prevCountRef.current = count;

    const handleClick = () => {
        setCount(prevCount + count);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>SetCount</button>
        </div>
    );
}

export default Example4