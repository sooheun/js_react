import './App.css';
import { useEffect, useState } from 'react';
import  Viewer from "./component/Viewer";
import Controller from './component/Controller';

function App()
{
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("업데이트: ", text, count);
  }, [count, text]);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App
