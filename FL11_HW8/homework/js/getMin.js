function getMin() {
    let z_min = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] <z_min) {
            z_min = arguments[i];
        }
    }
    return z_min;
}

console.log(getMin(3, 0, -3));