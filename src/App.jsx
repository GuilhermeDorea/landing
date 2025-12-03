import { useState } from 'react';
import './App.css';

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className="MyButton" onClick={handleClick}>
      I'm a button that was clicked {count} times.
    </button>
  );
}

function App() {
  return (
    <>
      <h1>Teste</h1>
      <div className="card">
        <MyButton className="MyButton" />
      </div>
    </>
  );
}

export default App;
