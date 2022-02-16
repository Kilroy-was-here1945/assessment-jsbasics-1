console.log("welcome to the password validatior tool")
console.log("password")

const readline = require('readline');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });



reader.question( function(input){
    if(input.length > 10) {
        console.log("wrong")
    } if(input.length < 10) {
        console.log("wrong")
    } if(input.length === 10) {
        console.log(correct)
    }


    console.log(input.length)


  reader.close()
} 
