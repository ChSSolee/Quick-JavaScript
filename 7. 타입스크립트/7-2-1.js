// 자바스크립트는 에러를 발생시키지 않음

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));      // 3
console.log(sum("1", 2));    // "12"
console.log(sum());          // NaN
