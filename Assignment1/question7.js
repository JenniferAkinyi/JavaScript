function longestCommonPrefix(str) {
   if (str.length === 0) return ''; 
 
   let prefix = str[0];
   for (let i = 1; i < str.length; i++) {
     while (str[i].indexOf(prefix) !== 0) {
       prefix = prefix.slice(0, -1);  
       if (prefix === '') return '';  
     }
    }
 
   return prefix; 
}
 
console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));
console.log(longestCommonPrefix(["prefix", "prefixes", "preform", "preformal"]));   
console.log(longestCommonPrefix(["apple", "banana", "cherry"]));
