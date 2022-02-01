import styles from "./styles.module.css";

function selectLang(lang) {

  if (lang === "de" ){

    return "Hallo"

  } else if (lang === "en" ) {

    return "Hello"

  } else if (lang === "es" ) {

    return "Hola"
    
  } else if (lang === "fr" ) {

    return "Bonjour"
    
  }
  
}

export function Greetings(props) {
  return (
    <div className={styles.greetingCard}>
      <h1> {`${selectLang(props.lang)} ${props.children}`} </h1>
    </div>
  );
}
