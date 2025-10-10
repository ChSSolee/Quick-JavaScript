## 2-2-3 타입

<br>

<hr>

<br>

#### 숫자 (`number`)

```js
let age = 27;
console.log('number:', age, typeof age);
```

<br>

#### 문자열 (`string`)

```js
let city = "Seoul";
console.log('string:', city, typeof city);
```

<br>

#### 불린/불리언 (`boolean`)

```js
let isActive = false;
console.log('boolean:', isActive, typeof isActive);
```

<br>

#### `undefined` (아직 값 없음)

```js
let data;
console.log('undefined:', data, typeof data);
```

<br>

#### `null` (명시적 없음)

```js
let emptyValue = null;
console.log('null:', emptyValue, typeof emptyValue); 
// typeof null === "object" (자바스크립트 설계 결함)
```
- https://lilys.ai/notes/828194

<br>

#### 객체 (`object`)

```js
let person = { nickname: "fox", score: 99 };
console.log('object:', person, typeof person);
```
<br>

#### 배열 (`array`, 실제로는 `object`)

```js
let nums = [10, 20, 30];
console.log('array:', nums, typeof nums);
```
<br>

#### 함수 (`function`)

```js
function sayHello() { return "hello!"; }
console.log('function:', sayHello, typeof sayHello);
```
<br>

#### `NaN` (Not a Number)

```js
let weirdValue = "abc" * 5;
console.log('NaN:', weirdValue, typeof weirdValue); // NaN, "number"
```
- `typeof NaN` 결과는 "`number`"
- 숫자 타입인데, 계산이 이상하게(의도하지 않게) 되었을 때

<br>

- `NaN` 판별 예시
```js
console.log('isNaN("abc" * 5):', isNaN(weirdValue)); // true
```

- `NaN`은 숫자가 아니란 뜻이지만, 자바스크립트에서는 숫자 타입(`number`)의 특수한 값
- 잘못된 숫자 연산 결과로 만들어지며, 예를 들어 "abc" * 5의 결과가 `NaN`
- `NaN` 판별은 `isNaN`(값) 함수를 사용