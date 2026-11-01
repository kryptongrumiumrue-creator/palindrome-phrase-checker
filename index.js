const readlineSync = require('readline-sync');

const input = readlineSync.question('Enter a word or phrase: ');
const text = input.trim().toLowerCase().replaceAll(' ', '');

let isPalindrome = true;

if (text.length === 0) {
    console.log('Invalid input. Please enter a word or phrase.');
} else {
    for (let i = 0; i < Math.floor(text.length / 2); i++) {
        if (text[i] !== text[text.length -1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    const result = isPalindrome ? 'is' : 'is not';
    console.log(`Result: ${input.trim()} ${result} a palindrome.`);
}