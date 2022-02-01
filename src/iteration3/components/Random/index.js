import styles from "./styles.module.css";

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function Random (props) {
  return (
    <div className={styles.randomCard}>
    
      <h1> {`Random value between ${props.min} and ${props.max} => ${randomNum(props.min, props.max)}`} </h1>
      
    </div>
  );
}
