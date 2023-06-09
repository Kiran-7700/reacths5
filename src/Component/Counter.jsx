import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Higher Order Component</h1>
            <h3>Count:{count}</h3>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    )
}

export default Counter;