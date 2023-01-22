const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let numAttempts;

const askGuess = () => {
    numAttempts--;
    rl.question("Enter a guess? ", checkGuess)
}


const checkGuess = number => {
    if(Number(number) > secretNumber){
        console.log("'Too high'")
        if(numAttempts === 0){
            console.log("'You lose!'")
            rl.close()
        }
        else{
            askGuess()
        }
        return false
    }
    else if(Number(number) < secretNumber){
        console.log("'Too low'")
        if(numAttempts === 0){
            console.log("'You lose!'")
            rl.close()
        }
        else{
            askGuess()
        }
        return false
    }
    else{
        console.log("'Correct!'")
        console.log("'You Win!'")
        rl.close()
    }
}

const randomInRange = (min, max) => {
    secretNumber = Math.floor(Math.random() * (max - min) + min)

}

const askRange = () => {
    rl.question("Enter a max number: ", max)
}

const max = max => {
    rl.question("Enter a min number: ", min => {
        console.log(`I'm thinking of a number between ${min} and ${max}...`)
        randomInRange(Number(min), Number(max))
        askGuess()
    })
}

const askLimit = () => {
    rl.question("Enter a number of attempts: ", limit => {
        numAttempts = limit
        askRange()
    })

}


askLimit()
