function isCaseInsensitivePalindrome(inputString) {
    inputString = inputString.toLowerCase();
    return inputString === inputString.split('').reverse().join('');
}
console.log(isCaseInsensitivePalindrome('Aba'));
console.log(isCaseInsensitivePalindrome('Racecar'));
console.log(isCaseInsensitivePalindrome('Palindrome'));
console.log(isCaseInsensitivePalindrome('Madam'));
console.log(isCaseInsensitivePalindrome('Hello'));