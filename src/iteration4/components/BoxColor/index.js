import styles from "./styles.module.css";

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}


export function BoxColor (props) {
  return (
    <div className={styles.boxColorCard} style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, border: "2px solid black"}}> 

      <p>{`RGB (${props.r}, ${props.g}, ${props.b})`}</p>
      <p>{ConvertRGBtoHex(props.r, props.g, props.b)}</p>

    </div>
  );
}
