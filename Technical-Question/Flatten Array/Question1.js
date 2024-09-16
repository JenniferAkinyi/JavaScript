// function flattenedArray(arr) {
//     let result = [];
//     arr.forEach(function(element){
//         if(Array.isArray(element)){
//             result = result.concat(flattenedArray(element));
//         } else {
//             result.push(element);
//         }
//     });
//     return result;
// }
function flattenArray(arr) {
    return arr.reduce((result, element) => {
      if (Array.isArray(element)) {
        return result.concat(flattenArray(element));
      } else {
        return result.concat(element);
      }
    }, []);
  }
  
const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(flattenArray(nestedArray));