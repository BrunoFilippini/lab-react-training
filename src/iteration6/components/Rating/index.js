export function  Rating (props) {

    const numbersOfStarts = Math.round(props.children)

    let star = "★"

    star = star.repeat(numbersOfStarts).padEnd(5, "☆")

    return <span>{star}</span>
    
}