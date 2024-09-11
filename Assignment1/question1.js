function isPalindrome(str) {
    str =  str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}
console.log(isPalindrome('A man, a plan, a canal, Panama'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
console.log(isPalindrome('Hello World!'));