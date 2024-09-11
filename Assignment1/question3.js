function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

function longestPalindrome(s) {
    let longest = '';

    for(let i = 0; i < s.length; i++) {
        for(let j=i+1; j <= s.length; j++) {
            let substring = s.slice(i, j);
            if(isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
