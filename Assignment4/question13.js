function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

let exampleObject = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(hasProperty(exampleObject, "name")); // true
console.log(hasProperty(exampleObject, "gender")); // false
