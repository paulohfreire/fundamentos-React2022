import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>You clicked {count} times</p>
    </div>
  );
}

export default App;
