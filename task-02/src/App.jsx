import React from "react";
import "./style.css";
import {useState} from 'react'

function App() {

  const [x, setX] = useState(5);
  const [y, setY] = useState(5);

  function moveHandler() {
    setX(prev=> prev + 1 )
    setY(prev=> prev + 1)
  }

  console.log(x,y)
  return <div className="App">

    <h1>Move the Box up!</h1>
    <button onClick={moveHandler}>Move Up</button>
    <div className="box" ></div>
  </div>;
}

export default App;
