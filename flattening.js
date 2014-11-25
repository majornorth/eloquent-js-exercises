// use the reduce method in combination with the concat method to 'flatten'
// an array of arrays into a single array that has all the elements of the
// input arrays

var arr1 = [
    [1, 3, 55, 67, 89, 2, 12],
    [12, 7, 8, 99, 102, 4, 5],
    [9, 7, 8, 7, 102, 4, 2],
    [33, 7, 8, 86, 102, 4, 1],
    [17, 7, 8, 11, 77, 8, 134]
    ];

console.log(arr1.reduce(function(flat, current) {
    return flat.concat(current);
}, []));
