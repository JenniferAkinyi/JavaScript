function invertObject(obj) {
    let inverted = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }

    return inverted;
}

let originalObject = {
    name: "John",
    age: "30",
    city: "New York"
};

console.log(invertObject(originalObject));
