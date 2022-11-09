import React, {useEffect, useState} from "react";

function App() {

  const [holder, setHolder] = useState()

  useEffect(() => {
    async function fetchData(){
      let response = await fetch('https://anapioficeandfire.com/api/characters')
      const data = await response.json()
      setHolder(data)
    }
    fetchData()
  }
    
  ,[])
  console.log(holder, 'HERE')

  return (<div className="App">
    <h1>SONGS OF FIRE AND ICE!</h1>
    {
     holder.map((item,idx)=> {
      return <div key={idx}>
        <p>link is <a href={item.url}>here</a></p>
        <p>The name is {item.name}</p>
        <p>Alias is {item.aliases}</p>
        <p>The gender is {item.gender}</p>

        </div>
     })
    }
  </div>)
}

export default App;
