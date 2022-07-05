function reverseString(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}
console.log(reverseString('hello world'));

/*
Approach 2 using inbuilt methods

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

*/