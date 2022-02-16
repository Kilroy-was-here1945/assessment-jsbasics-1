function rollDice(){
    let possibleRolls = [1, 2, 3, 4, 5]
    let randomNumber = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomNumber]
}

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    return firstRoll * secondRoll
}

let multipiedNumber = diceMultiplier()

console.log(multipiedNumber)
