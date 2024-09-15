function all_methods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function (property) {
        return typeof obj[property] === 'function';
    });
}

console.log(all_methods(Array));
