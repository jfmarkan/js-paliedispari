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

