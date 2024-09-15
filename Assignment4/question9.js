function getAllPropertyNames(obj) {
    let properties = new Set();

    Object.getOwnPropertyNames(obj).forEach(prop => properties.add(prop));

    for (let prop in obj) {
        properties.add(prop);
    }

    return Array.from(properties);
}

function Parent() {
    this.parentProp = "Parent property";
}

Parent.prototype.inheritedProp = "Inherited property";

let child = new Parent();
child.ownProp = "Child's own property";

console.log(getAllPropertyNames(child));
