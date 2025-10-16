## import, export
- 자바스크립트에서 외부 파일(모듈)로 코드를 나눠서 `import/export`로 불러오려면,
    
    반드시 웹서버(예: http-server, Live Server 등)로 파일을 제공.

- 그렇지 않으면 브라우저가 보안상 파일을 막아서 import/export가 동작하지 않음


```bash
$ npm install -g http-server
$ http-server
```

<br>

- `3_4_1.js`
  
```js
export function test(){
    console.log("test function");
}

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

```

<br>

- `3_4_1.js` import
```html
<script type="module">
    import { add, subtract, test } from './3_4_1.js';
    
    console.log(add(3, 7));       // 10
    console.log(subtract(10, 4)); // 6

    test(); // 콘솔: "test function"

    const myFn = test;
    myFn(); // 콘솔: "test function" (이때 실제 실행)
</script>
```