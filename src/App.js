import React, { useState } from "react";
import Monster from "./components/UI/monster/Monster";

function App() {
  const [hero,setHero] = useState([
    {streangh:1,body:'Description'},
  ])

  return (
    <div className="App">
      <h1></h1>
      <Monster/>
    </div>
  );
}

export default App;
