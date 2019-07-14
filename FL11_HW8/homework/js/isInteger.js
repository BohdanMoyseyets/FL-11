function isInteger(n) {
    return (n ^ 0) === n;
}

console.log(isInteger(5));
console.log(isInteger(5.1));