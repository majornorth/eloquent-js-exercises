var isEven = function(n) {
    if (n == 0) {
        return 'even';
    } else if (n == 1) {
        return 'odd';
    } else if (n < 0) {
        return isEven(-n);
    } else {
        return isEven(n - 2);
    }
}

console.log(isEven(72));
