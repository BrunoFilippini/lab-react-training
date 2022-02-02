let dice = [1, 2, 3, 4, 5, 6];

function randomDice(){

    let diceRandom = dice[Math.floor(Math.random()*dice.length)]
  
    /* return setTimeout( diceRandom, 2000) */

   console.log(diceRandom)
}



setTimeout(randomDice, 1000) 

/* console.log(randomDice) */



/* let randomDice = setTimeout(function() {

    let dice = [1, 2, 3, 4, 5, 6];
    
    let diceRandom = dice[Math.floor(Math.random()*dice.length)];

    return diceRandom

  }, 500)

  console.log(randomDice) */