// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [toDos, setToDoS] = useState([]);

  const handleToDo = (e) => {
    e.preventDefault();
    if (!toDos.includes(input)) {
      setToDoS([...toDos, input]);
      setInput("");
    } else {
      alert("To Do Already Exists...!!!");
    }
  };

  return (
    <>
      <h1>To Do App</h1>
      <form onSubmit={handleToDo}>
        <div className="main">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit">Add</button>
        </div>
        <Ullist toDos={toDos} setToDoS={setToDoS} />
      </form>
    </>
  );
}

export default App;

export function Ullist({ toDos, setToDoS }) {
  const handleRemove = (index) => {
    const finalData = toDos.filter((_, i) => i !== index);
    setToDoS(finalData);
  };

  const [status, setStatus] = useState(false);
  const handleComplete = () => {
    setStatus(!status);
  };

  return (
    <>
      <ul>
        {toDos.map((todo, index) => {
          return (
            <li
              key={index}
              className={status ? "done" : ""}
              onClick={handleComplete}
            >
              <span>
                {index + 1 + "."}&nbsp;
                {todo}
              </span>
              <span className="remove" onClick={() => handleRemove(index)}>
                &nbsp;X
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
