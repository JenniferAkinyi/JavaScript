function objectToEntries(obj) {
    return Object.entries(obj);
}


let exampleObject = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(objectToEntries(exampleObject));
