// 에러를 미연에 방지할 수 있음
// https://www.typescriptlang.org/play

function sumType(a: number, b: number): number {
    return a + b;
}

console.log(sumType(1, 2));      // 3
console.log(sumType("1", 2));    // ❌ 에러! Argument of type 'string' is not assignable to parameter of type 'number'
console.log(sumType());          // ❌ 에러! Expected 2 arguments, but got 0.
