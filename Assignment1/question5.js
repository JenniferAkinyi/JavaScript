function removeDuplicates(Str){
    let result = new Set(Str.split(''));

    return Array.from(result).join('');
}
// test cases
console.log(removeDuplicates('programming')); 
console.log(removeDuplicates('hello world'));
console.log(removeDuplicates('aaaaa'));
console.log(removeDuplicates('abcd'));
console.log(removeDuplicates('aabbcc'));