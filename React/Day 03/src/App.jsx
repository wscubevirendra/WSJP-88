import { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculating...");
    let sum = 0;
    for (let i = 0; i < 100000000; i++) sum += i;
    return sum;
  }, []); // empty dependency = calculate only once

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Expensive Result: {result}</p>
    </div>
  );
}


export default App;