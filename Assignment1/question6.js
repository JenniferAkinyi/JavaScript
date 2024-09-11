function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}
function countPalindromes(s) {
    let count = 0;
    for(let i=0; i < s.length; i++) {
        if(isPalindrome(s[i]) === s[s.length - i - 1]) {
            count++;
        }
    }
    return count;
}
console.log(countPalindromes('ababa')); 