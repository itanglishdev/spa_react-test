import React from "react";
import "./style.css";
import {useState} from 'react'

function App() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function moveHandler() {
    setX(prev=> prev +10 )
  }
  return <div className="App">

    <h1>Move the Box up!</h1>
    <button onClick={moveHandler}>Move Up</button>
    <div className="box" ></div>
  </div>;
}

export default App;
