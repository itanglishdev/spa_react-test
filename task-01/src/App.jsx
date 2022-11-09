import React from "react";
import "./style.css";
import data from './data'
// import Card from './components/Card'

function App() {



  return <div className="App">
    
    {/* <Card data={data}/> */}
    <img src={data.img} alt="Jeff Bezos" />
        <h1>{data.name}</h1>
        <p>Place of birth:</p><span>{data.city}</span>
        <p>Age of birth:</p><span>{data.born}</span> 
        <p>Owns:</p><span>
            {
            data.companies.map((item,idx) => {
                return <div key={idx}>{item}</div>
            })
            }
        </span>
        <p>Likes:</p><span>{data.likes}</span>
        <p>Twitter:</p><a href={data.twitterLink}>Twitter</a>
  </div>;
}

export default App;
