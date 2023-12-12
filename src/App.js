import React, { useState } from "react";
import Monster from "./components/Monster";

function App() {

    // const timer = setInterval(() => {
    //     if (second > 0){
    //     setCount(count + second);
    //     }
    // },1000);

  function monsterHit(){
    setHero( hero.money + hero.streangh );
  }

  function swordOne(){
      if ( hero.money > 99 ){
          setHero( hero.money - 100 );
          setHero( hero.streangh + 1 );
      }
  }

  function poisonOne(){
      if( hero.money > 14 ){
          setHero( hero.second + 1 );
      }
  }

  const [hero, setHero] = useState({
    streangh:1,
    money:0,
    second:0
  });

  
  return (
    <div className="App">
      <h1>Money:{hero.money}</h1>
      <Monster hero={hero} setHero={setHero}/>
      <p>Your power:{hero.streangh} Per second:{hero.second}</p>
      <div className={classes.Shop}>
                <div>
                    <button className={classes.Swords} onClick ={ swordOne }>-s---</button>
                    <p>100</p>
                    <p>Power + 1</p>
                </div>
            </div>
            <div className={classes.Shop}>
                <div>
                    <button className={classes.Swords} onClick ={ poisonOne }>poison 1</button>
                    <p>15</p>
                    <p>poison + 1</p>
                </div>
            </div>
    </div>
  );
}

export default App;
