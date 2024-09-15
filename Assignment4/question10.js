function getAllPropertyValues(obj) {
    return Object.values(obj);
}

let exampleObject = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(getAllPropertyValues(exampleObject));
