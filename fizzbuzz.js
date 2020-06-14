// Write a function say() that inputs a number and output a string. A factor of 3 returns "Fizz", a factor of 5 returns "Buzz" and factor of 15 returns "Fizz Buzz", otherwise return the number. For example:

// say(4) returns "4"
// say(33) returns "Fizz"
// say(95) returns "Buzz"
// say(60) returns "Fizz Buzz"

function say(n){
    if(n%5 == 0 && n%3 == 0){
        return 'Fizz Buzz'
    } else if (n%3 == 0){
        return 'Fizz'
    } else if (n%5 == 0){
        return 'Buzz'
    } else {
        return n
    }
}

module.exports = say;