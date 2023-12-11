import React, { useState } from "react";
import classes from './Monster.module.css';

const Monster = () => {
    const [count, setCount] = useState(0);

    function monsterHit(){
        setCount( count + 1 );
      }

    return (
        <div>
            <h1>{count}</h1>
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
        </div>
    );
};

export default Monster;