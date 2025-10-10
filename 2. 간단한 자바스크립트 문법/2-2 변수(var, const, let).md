## 2-2-1 변수

<br>

<hr>

<br>

#### `var` (옛날 방식이고 요즘 안씀) 
```js
// 
var x1 = 1;
var y1 = 2;

console.log('var x1 :', x1);
console.log('var x1 + y1 :', x1 + y1);
```

<br>

### `const`

```js
const x2 = 1;
const y2 = 2;

// x2 = 3; // 에러: const는 재할당 불가

console.log('const x2 :', x2);
console.log('const x2 + y2 :', x2 + y2);
```

<br>

#### `let`
```js
let x3 = 1;
let y3 = 2;

x3 = 3; // 재할당 가능

console.log('let x3 :', x3);
console.log('let x3 + y3 :', x3 + y3);
```

<br>

<hr>

<br>

## 2-2-2 스코프 (범위)

<br>

```js
function checkVarScope() {
    if (true) {
        var fruit = 'apple';
    }
    console.log('fruit (var) :', fruit); // 'apple'
}

function checkLetScope() {
    if (true) {
        let vegetable = 'carrot';
    }
    console.log('vegetable (let) :', vegetable); // ReferenceError
}

checkVarScope();
checkLetScope();
```

<br>

<hr>

<br>

## 2-2-3 재선언, 재할당

<br>

### `var`: 재선언 O, 재할당 O

```js
var item = 10;
var item = 20; // 에러 없음
item = 30;     // 재할당 가능
console.log('var item:', item); // 30 
```

<br>

#### `let`: 재선언 X, 재할당 O
```js
let count = 5;
// let count = 8; // 에러: 이미 선언됨
count = 12;      // 재할당 가능
console.log('let count:', count); // 12
```
<br>

### `const`: 재선언 X, 재할당 X

```js
const MAX_VALUE = 100;
// const MAX_VALUE = 200; // 에러: 이미 선언됨
// MAX_VALUE = 300;       // 에러: 재할당 불가
```

<br>

#### `let` : 변수처럼 사용
#### `const` : 상수처럼 사용(그런데 객체 배열의 내부값은 변경 가능)

```js
const arr = [1, 2, 3];
arr[0] = 10; // 가능 (배열 내부는 바꿀 수 있음)
console.log('const arr:', arr); // [10, 2, 3]
```

<br>
<hr>
<br>

## 호이스팅

<br>

#### `var`는 선언만 먼저 끌어올려짐(hoisting), 값은 `undefined`

```js
console.log('oldVar :', oldVar); // undefined
var oldVar = 42;

// let/const는 TDZ(Temporal Dead Zone) 때문에 에러 발생
// (선언 전에 접근 시 ReferenceError)
try {
    console.log('newLet :', newLet); // 에러 발생
} catch (e) {
    console.log('newLet 접근 시 에러:', e.message);
}
let newLet = 99;

```

#### 결론:
- `var`는 예전 방식이라 잘 안 씀
- `let/const`로 선언하는 게 최신 방식
- `let`은 값 변경 가능
- `const`는 재할당 불가