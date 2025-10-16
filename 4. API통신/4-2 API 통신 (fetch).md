## API 통신 (fetch)

<br>

### `fetch()`

<br>

```html
<button id="loadBtn">데이터 가져오기</button>
<pre id="result"></pre>

<script>
    document.getElementById('loadBtn').addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/todos/5')
            .then(response => {
                console.log('[1] fetch 결과 (response 객체):', response); // 첫 번째 로그
                return response.json(); // response 객체를 JSON으로 파싱
            })
            .then(data => {
                console.log('[2] response.json() 결과 (파싱된 데이터):', data); // 두 번째 로그
                document.getElementById('result').textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.log('[3] 에러 발생:', error); // 에러 로그
                document.getElementById('result').textContent = "에러 발생: " + error;
            });
    });
</script>
```

<br>

### `fetch()` - 상태 코드 분기처리

<br>

```html
<button id="loadBtn">데이터 가져오기</button>
<pre id="result"></pre>

<script>
    document.getElementById('loadBtn').addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/todos/5@#$@#$#!$!@$!@$') //  https://jsonplaceholder.typicode.com/todos/5@#$@#$#!$!@$!@$ -> 오류
            .then(response => {
                console.log('[1] fetch 결과 (response 객체):', response);
                if (!response.ok) {
                    // 2xx가 아니면(에러면)
                    throw new Error('HTTP 오류! 상태 코드: ' + response.status);
                }
                // 2xx면 데이터 파싱 진행
                return response.json();
            })
            .then(data => {
                console.log('[2] response.json() 결과 (파싱된 데이터):', data);
                document.getElementById('result').textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.log('[3] 에러 발생:', error);
                document.getElementById('result').textContent = "에러 발생: " + error;
            });
    });
</script>
```