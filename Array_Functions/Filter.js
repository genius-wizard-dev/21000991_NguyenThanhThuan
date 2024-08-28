const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.newFilter = function (callback) {
    var newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

var a =  arr.filter((item) => item % 2 === 0)
console.log(a)

var b = arr.newFilter((item) => item % 2 === 0)
console.log(b)
