import { useState } from "react"
import styles from "./styles.module.css";
import diceEmpty from '../../assets/dice-empty.png'
import dice1 from '../../assets/dice1.png'
import dice2 from '../../assets/dice2.png'
import dice3 from '../../assets/dice3.png'
import dice4 from '../../assets/dice4.png'
import dice5 from '../../assets/dice5.png'
import dice6 from '../../assets/dice6.png'


export function Dice (props) {
    let [diceNow, setSrc] = useState(diceEmpty)
  
    function randomDICE() {
        
        const dices = [dice1, dice2, dice3, dice4, dice5, dice6 ]

        function randomDice(){

            setSrc(dices[Math.floor(Math.random()*dices.length)])
            console.log(diceNow)
        
        }

        return (setTimeout(randomDice, 1000))
    }

    function emptyDice() {

        console.log(diceNow)
        return diceNow = diceEmpty
    }

    function handleImage() {
        setSrc(diceEmpty)
        emptyDice()
        randomDICE()  
    }
    
    
    return (
        
        <>
        
            <img className={styles.Dice} src={diceNow} alt="dice" onClick={handleImage} />

        </>

        
    );
  }