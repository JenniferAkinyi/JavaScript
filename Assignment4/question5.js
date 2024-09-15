function getSubsets(str) {
    let subsets = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            subsets.push(str.slice(i, j));
        }
    }

    return subsets;
}

let string = "dog";

let result = getSubsets(string);
console.log(result);