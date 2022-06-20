// 使用reduce实现map
Array.prototype.myMap = function(fn, thisArg = []) {
    // 如果fn传入的不是一个函数则抛出异常
    if (typeof fn != 'function') {
        throw new Error(`${fn} is not a function`);
    }
    return this.reduce((pre, cur, index, arr) => {
        return pre.concat(fn.call(thisArg, cur, index, arr));
    }, [])
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const temp = arr.myMap(item => item * 100)
let sum = temp.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue
}, 0)
console.log(sum);