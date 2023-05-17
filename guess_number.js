let answer = Math.floor(Math.random() * 10);
console.log("The random number is " + answer);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('please guess a number!!!! ', number => {
    console.log(`your number is ${number}`);
    readline.close();

        if (answer == number){
            console.log("YOU WIN!!!!!!!!!!!!")
        
        }
        else if (number > answer){
            console.log("You guessed to high!! You lose!!!!!!")
        }
        else if (number < answer){
            console.log("You guessed to low!! You lose!!!!!!")
        }
        else{
            console.log("Not a number!!! You lose!!!!!!!!!!!!!!!")
        }
  });
