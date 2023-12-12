import React, { useState } from "react";
import classes from './Monster.module.css';

const Monster = () => {
    const [streangh,setStreangh] = useState(1);

    const [count, setCount] = useState(0);

    const [second, setSecond] = useState(0);

    // const timer = setInterval(() => {
    //     if (second > 0){
    //     setCount(count + second);
    //     }
    // },1000);

    function monsterHit(){
        setCount( count + streangh );
    }

    function swordOne(){
        if ( count > 99 ){
            setCount( count - 100 )
            setStreangh( streangh + 1 )
        }
    }

    function swordTwo(){
        if ( count > 999 ){
        setCount( count - 1000 )
        setStreangh( streangh + 10 )
        }
    }

    function swordThree(){
        if ( count > 9999 ){
        setCount( count - 10000 )
        setStreangh( streangh + 100 )
        }
    }

    function swordFour(){
        if ( count > 99999 ){
        setCount( count - 100000 )
        setStreangh( streangh + 1000 )
        }
    }

    
    function swordFive(){
        if ( count > 999999 ){
        setCount( count - 1000000 )
        setStreangh( streangh + 10000 )
        }
    }

    function swordSix(){
        if ( count > 9999999 ){
        setCount( count - 10000000 )
        setStreangh( streangh + 100000 )
        }
    }

    // function poisonOne(){
    //     if( count > 14 ){
    //         setSecond( second + 1 );
    //     }
    // }

    // function poisonTwo(){
    //     if( count > 1499 ){
    //         setSecond( second + 25 );
    //     }
    // }

    // function poisonThree(){
    //     if( count > 149999 ){
    //         setSecond( second + 250 );
    //     }
    // }

    return (
        <div>
            <h1>Money:{count}</h1>
            <button className={classes.Monster} onClick={ monsterHit }>
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡟⠉⡙⠿⢟⣛⡷⠶⣤⣄⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⣱⣄⠀⠀⠈⠀⠀⠈⢉⣛⣶⣤⣀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡤⠶⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⡇⠙⢷⠀⠀⠀⠀⣴⠟⠉⠀⠈⠁
⠀⠀⠀⠀⠀⣠⡴⠾⠋⠡⠰⣴⡏⠀⠀⠀⣠⣤⣤⣶⠞⠛⠿⣿⢿⠛⠛⠳⢶⣤⣀⠀⢀⣿⠀⠃⠀⠀⠳⣄⠀⢠⡇⠀⠀⠀⠀⠀
⠀⠀⢀⡴⠛⠉⠀⠀⠀⢀⠎⠀⣷⣄⣴⡏⣀⣼⣿⣿⡇⢀⠀⠈⣇⢳⠀⠀⠀⠀⠉⠳⣾⣯⠃⠀⠀⢀⣀⡈⢳⠀⣿⡀⠀⠀⠀⠀
⢀⣴⣫⠴⠒⠒⠒⠲⣤⡀⠀⠀⢈⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⡀⡟⠘⠆⠀⠀⠀⣀⣴⡿⠃⣠⡶⠛⠋⠉⠛⠛⢷⣼⣧⠀⠀⠀⠀
⠚⠋⠀⠀⠀⠀⠀⠀⣺⡴⠛⢶⣾⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⢣⠇⠀⠀⠀⢠⢿⡏⠉⠀⡰⢿⡆⠀⠀⠀⠀⠀⠀⠘⠛⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠛⠁⠀⢸⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⢠⠟⠀⠀⠀⠀⠀⠘⠛⠉⣹⠇⠘⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠈⠉⠀⠀⠀⠀⠀⠄⣱⠏⣰⠇⠀⠀⠀⠀⠀⢠⣾⡏⠀⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢧⡀⠀⠀⠀⠂⢈⡤⢞⡡⠚⠁⠀⠀⠀⠀⠀⠀⢸⡿⠀⢰⣻⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠙⠛⠲⠶⠒⠛⠉⠒⠉⢀⣀⣀⠀⣀⠀⠀⠀⠠⠟⠁⣠⢏⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠈⣶⣤⣄⣀⣰⣿⣿⣿⣿⣮⣣⡀⠀⠀⢠⢞⠏⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⣾⠿⠶⡼⠇⠀⠉⠛⢿⣿⣿⣿⣿⡿⡿⠗⠀⠀⠕⠋⢰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠀⠀⠀⠀⣀⣀⣀⠀⠙⢿⣿⣿⣷⠀⠀⠀⠀⠀⣠⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠟⠉⠉⠉⠙⠻⣾⣿⣿⠏⠀⠀⢀⡄⠈⣹⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⢠⣤⣤⣀⣠⣾⠟⣉⠔⠂⠀⢼⠇⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣠⡾⠃⠘⢦⡀⠈⠙⠒⠈⠁⠀⠀⠀⠉⠀⣄⢹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⣿⠉⠀⠈⠉⠀⠀⠀⠀⠙⣦⡀⠀⠀⠀⠀⠀⠀⣀⠀⠈⢾⣷⡀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀⢱⡀⠀⠀⠀⠀⠀⠀⠀⣀⡾⠉⠢⠀⣀⠴⠒⠉⠀⡀⠀⠀⠉⠙⠛⠛⠉⠉⠀⠈⠙⠲⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠖⠛⠉⠁⠀⠀⢀⡞⡁⠀⠀⠀⢸⣿⢳⢠⠀⠀⠀⠀⠀⣀⣀⣀⣀⠀⠈⢳⡄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡞⠉⠀⠀⡀⠤⠀⠂⠀⠀⣼⢰⠃⠀⢀⠀⣠⡥⠶⢧⣤⠤⠴⠒⠛⠉⠁⠀⠉⠻⣦⡀⢻⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⢠⠟⣿⠛⠛⠛⠛⠛⢻⣾⠀⠀⠸⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠃⣸⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢷⡀⠸⠄⢿⡀⠀⠀⠀⠀⠈⢿⡀⠀⠙⠲⠿⠷⠶⠤⣄⡀⠀⠀⠀⠀⠀⠀⠀⢸⡅⣾⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⣄⣀⠙⠦⣄⠀⠀⠀⠀⠙⠦⣤⣤⣤⣤⣤⣄⡀⠙⢦⡀⠀⠀⠀⠀⢀⣼⠗⣸⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢹⡆⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠟⠀⠀⢠⡇⠀⠀⠀⠀⠀⠙⠛⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡴⠚⣋⡼⠃⠀⠀⠀⠀⠀⠀⠀⢾⣁⣀⣀⣠⡴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</button>
            <p>Your power:{streangh} Per second:{second}</p>
            <div className={classes.Shop}>
                <div>
                    <button className={classes.Swords} onClick ={ swordOne }>-s---</button>
                    <p>100</p>
                    <p>Power + 1</p>
                </div>
                <div>
                    <button className={classes.Swords} onClick ={ swordTwo }>-o---</button>
                    <p>1000</p>
                    <p>Power + 10</p>
                </div>
                <div>
                    <button className={classes.Swords} onClick ={ swordThree }>-|---</button>
                    <p>10000</p>
                    <p>Power + 100</p>
                </div>
                <div>
                    <button className={classes.Swords} onClick ={ swordFour }>-s|-----</button>
                    <p>100000</p>
                    <p>Power + 1000</p>
                </div>
                <div>
                    <button className={classes.Swords} onClick ={ swordFive }>--)-----</button>
                    <p>1000000</p>
                    <p>Power + 10000</p>
                </div>
                <div>
                    <button className={classes.Swords} onClick ={ swordSix }>---()------</button>
                    <p>10000000</p>
                    <p>Power + 100000</p>
                </div>
            </div>
            {/* <div className={classes.Shop}>
                <div>
                    <button className={classes.Swords} onClick ={ poisonOne }>poison 1</button>
                    <p>15</p>
                    <p>poison + 1</p>
                </div>
                <div>
                    <button className={classes.Swords} onClick ={ poisonTwo }>poison 2</button>
                    <p>1500</p>
                    <p>poison + 25</p>
                </div>
                <div>
                    <button className={classes.Swords} onClick ={ poisonThree }>poison 3</button>
                    <p>150000</p>
                    <p>poison + 250</p>
                </div>
            </div> */}
        </div>
    );
};

export default Monster;