import React, { useState } from 'react';

let flag = 0;
function App() {
    const [count, setCount] = useState(() => {
      console.log('init count')
      return 5;
    })
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>点击</button>
        count:({count})
      </div>
    );
}

export default App;
