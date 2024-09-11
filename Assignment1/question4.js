function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
//test cases
console.log(areAnagrams('Listen', 'Silent')); 
console.log(areAnagrams('Hello', 'World'));