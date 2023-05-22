// 1 - for the plaindrome word I will first request the word to the user using a prompt
const straightWord = [];
const reverseWord = [];

let wordToVerify = prompt("Please enter a word to verify if it's a palindrome");
let iterations = wordToVerify.length

for ( let i = 0; i < iterations; i++ ){
    straightWord.push(wordToVerify.charAt(i));
}

for ( let i = iterations - 1; i >= 0; i-- ){
    reverseWord.push(wordToVerify.charAt(i));
}

function palindromeCheck (array1, array2) {
    if (array1.toString() === array2.toString()){
        return true;
    }
}

if (palindromeCheck(straightWord, reverseWord)){
    console.log ('The word ' + wordToVerify + ' is a Palindrome');
    } else {
    console.log ('The word ' + wordToVerify + ' is not a Palindrome');
}


let evenOddChoice = prompt('Insert if the result will be EVEN or ODD');
let userNumber = parseInt(prompt('Insert a number between 1 and 5'));


function getRandomInt (min, max){
    const randomNumber =  Math.floor(Math.random()* max) + min;
    return randomNumber;
}

function sumNumbers (number1, number2){
    const result = number1 + number2;
    return result;
}

function evenVerify (dividendo){
    if (dividendo % 2 === 0){
        return true;
    };
    return false;
}


if ((evenVerify(sumNumbers(getRandomInt(1,5), userNumber))) && (evenOddChoice = "EVEN")){
    console.log('You have won! the final result is EVEN');
} else if ((!evenVerify(sumNumbers(getRandomInt(1,5), userNumber))) && (evenOddChoice = "ODD")){
    console.log('You have won! the final result is ODD');
} else {
    console.log("Sorry, you've lost");
}
