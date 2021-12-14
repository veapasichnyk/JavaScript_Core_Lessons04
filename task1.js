var arr = [];
for (var i = 0, t = 20; i < t; i++) {
    arr.push(Math.round(Math.floor(Math.random() * t) - 10));
}

console.log(arr);

arr.sort(function (a, b) { return a - b });
console.log(arr);

arr.sort(function (a, b) { return b - a });
console.log(arr);

let nonegatives = arr.filter(e => e >= 0);
console.log(nonegatives);

let negatives = arr.filter(e => e < 0);
console.log(negatives);