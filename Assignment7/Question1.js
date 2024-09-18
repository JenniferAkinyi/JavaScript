function filterAndSort(filterFn,...numbers){
    let filtered = numbers.filter(filterFn);
    return filtered.sort((a,b)=>a-b);

}
//test cases
const isEven = (num) => num % 2 === 0;
console.log(filterAndSort(isEven, 5, 3, 8, 6, 2));