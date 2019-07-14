function reverseNumber(n) {
    let z = 0, r_num = 0;
    if ( n > 0) {
        z = 1;
    }
    if ( n < 0) {
        n = -n;
        z = -1;
    }
    while (n > 0) {
        r_num = r_num * 10 + n % 10;
        n = ~~(n / 10);
    }
    return z * r_num;
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));