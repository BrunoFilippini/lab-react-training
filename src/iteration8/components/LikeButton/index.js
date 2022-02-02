import { useState } from "react"
import styles from './styles.module.css'


export function LikeButton () {

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('purple');
  
  function handleAcress() {
    setCounter(counter + 1)
    changeColor()
  }


  function changeColor() {
    const colors = ['blue','green','yellow','orange','red','purple']
    
    let index = counter % colors.length
    
    setColor(colors[index])    
  }

  return (
    
    <>

      <button className={styles.likes} onClick={handleAcress} style={{backgroundColor: `${color}`}}> 

      {counter} Likes
      
      </button>

    </>

);
}
