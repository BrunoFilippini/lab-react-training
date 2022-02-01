import styles from "./styles.module.css";



export function IdCard(props) {
  return (
    <div className={styles.card}>
        <div>

            <img src={props.picture} alt={props.alt} />

        </div>

        <div className= {styles.information}>

        <p><span>First name:</span> {props.firstName} </p>
        <p><span>Second name:</span> {props.lastName} </p>
        <p><span>Gender:</span> {props.gender}</p>
        <p><span>Height:</span> {`${props.height / 100} m`}</p>
        <p><span>Birth:</span> {props.birth.toLocaleString()}</p>

        </div>

    </div>
  );
}
