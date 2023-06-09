import React, { useState, useMemo } from "react";


const Pure = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const mutliCountMemo = useMemo(() => {
        console.log("multicount")
        return count * 5;
    }, [count])

    return (
        <>

            <h1>Pure Component</h1>
            <p>Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered. Pure Components restricts the re-rendering ensuring the higher performance of the Component
            </p>
            <h2>Features of React Pure Components</h2>
            <ul>
                <li>Prevents re-rendering of Component if props or state is the same</li>
                <li>Takes care of “shouldComponentUpdate” implicitly</li>
                <li>State and Props are Shallow Compared</li>
                <li>Pure Components are more performant in certain cases</li>
            </ul>
            <p>In the case of Pure Components, the React components do not re-render blindly without considering the updated values of React “props” and “state”. If updated values are the same as previous values, render is not triggered.</p>
            <h1>Use memo hook in react {count}</h1>
            <h2>{item}</h2>
            <h2>{mutliCountMemo}</h2>
            <button onClick={() => setCount(count + 1)}>Update count</button>
            <button onClick={() => setItem(item * 10)}>Update Item</button>
        </>
    )
}

export default Pure;