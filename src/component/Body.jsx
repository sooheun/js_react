import { useState } from "react";

function Body({ children })
{
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  
  return (
    <div>
      <input value={text} onChange={handleOnChange} />
      <div>{text}</div>
    </div>
  );
}

export default Body;