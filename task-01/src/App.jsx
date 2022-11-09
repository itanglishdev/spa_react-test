import React from "react";
import "./style.css";
import data from './data'
import Card from './components/Card'

function App() {



  return <div className="App">
    
    <Card value={data}/>
  </div>;
}

export default App;
