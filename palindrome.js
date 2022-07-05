function checkPalindrome(str) {
    let len = str.length;
    const mid = Math.floor(len / 2);
    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return `${str} is not a palindrome`;
        }
    }
    return `${str} is a palindrome`;
}

console.log(checkPalindrome("abba"));

/* 

Approach 2 using inbuild methods

function reverse(str) {
    return s.split("").reverse().join("");
}

const str = "abba";
if(str === reverse(str)) console.log(`${str} is not a palindrome`);
else console.log(`${str} is not a palindrome`);

*/