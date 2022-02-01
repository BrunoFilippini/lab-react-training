import styles from "./styles.module.css";
import visa from "../../assets/visaLogo.png"
import master from "../../assets/masterLogo.png"

function logos(type) {
  if (type === "Visa"){

    return visa

  } else if (type === "Master Card") {

    return master

  }
}

function hide (card) {

  let hideNum = [];

	for(let i = 0; i < card.length; i++){
    if (i < card.length-4) {

      hideNum.push("*");

    } else {

      hideNum.push(card[i]);
    }
  }

  return hideNum.join(" ");
}

export function CreditCard (props) {
  return (
    <div className={styles.CreditCard} style={{backgroundColor: `${props.bgColor}`, color:`${props.color}`}}>
      
      <div className={styles.logo}>

          <img src={logos(props.type)} alt={props.alt} />

      </div>

      <h2>{hide(props.number)} </h2>

      <div className= {styles}>

        <p>Expires {props.expirationMonth}/{props.expirationYear} <span>{props.bank}</span></p>
        <p>{props.owner}</p>

        {/* <p>{props.bgColor}</p>
        <p>{props.color}</p> */}

      </div>

    </div>
  );
}
