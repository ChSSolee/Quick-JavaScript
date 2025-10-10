## 1. if/else 기본 예제

```js
let height = 170;
if (height >= 160) {
    console.log('키가 160 이상입니다.');
} else {
    console.log('키가 160 미만입니다.');
}
```

<br>

## 2. else if 예제

```js
let temperature = 15;
if (temperature >= 30) {
    console.log('덥다');
} else if (temperature >= 20) {
    console.log('따뜻하다');
} else if (temperature >= 10) {
    console.log('선선하다');
} else {
    console.log('추운 날씨');
}
```
<br>

## 3. switch 예제

```js
let fruit = 'banana';
switch(fruit) {
    case 'apple':
    console.log('사과입니다.');
    break;
    case 'banana':
    console.log('바나나입니다.');
    break;
    case 'orange':
    console.log('오렌지입니다.');
    break;
    default:
    console.log('기타 과일입니다.');
}
```
<br>

## 4. truthy/falsy 예제

```js
if ("world") { // truthy
    console.log('"world"는 truthy로 평가되어 이 메시지가 출력됩니다.');
}
if (null) { // falsy
    console.log('null은 falsy라 이 메시지는 출력되지 않습니다.');
}
if (false) { // falsy
    console.log('false는 falsy라 이 메시지는 출력되지 않습니다.');
}
if ([1, 2]) { // truthy
    console.log('요소가 있는 배열([1, 2])도 truthy입니다!');
}
if ({ a: 1 }) { // truthy
    console.log('속성이 있는 객체({a:1})도 truthy입니다!');
}

/*
if ("ok") { ... }         // 실행 O
if ([1]) { ... }          // 실행 O
if ({key:1}) { ... }      // 실행 O
if (99) { ... }           // 실행 O
if (-100) { ... }         // 실행 O

if (false) { ... }        // 실행 X
if (0) { ... }            // 실행 X
if ("") { ... }           // 실행 X
if (null) { ... }         // 실행 X
if (undefined) { ... }    // 실행 X
if (NaN) { ... }          // 실행 X
*/
```

<br>

## 5. 조건문 == 와 === 차이

```js
let value = "10";

if (value == 10) {
    console.log('== : 타입이 달라도 값이 같으면 true');
}
if (value === 10) {
    console.log('=== : 타입과 값이 모두 같아야 true');
} else {
    console.log('=== : 타입이 다르면 false!');
}
```