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
            console.log("you are a winner!!!!!!!!!!!!")
        
        }
        else{
            console.log("you lose!! please try again.")
        }
  });
