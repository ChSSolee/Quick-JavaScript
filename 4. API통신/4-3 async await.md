## async, await

<br>

### `fetch()` - `async`/`await` 방식
-  기존 `fetch` $\rightarrow$ `then`
    
    이번에 `fetch` -> `async`/`await`

    - **가독성 높음**

<br>

```html
<button id="loadBtn">데이터 가져오기</button>
<pre id="result"></pre>

<script>
    document.getElementById('loadBtn').addEventListener('click', async () => {
        const resultEl = document.getElementById('result');
        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/todos/5');
            if (!response.ok) {
                throw new Error('HTTP 오류! 상태 코드: ' + response.status);
            }
            const data = await response.json();
            resultEl.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            resultEl.textContent = "에러 발생: " + error;
        }
    });
</script>
```

<br>

### `fetch()` - 여러 API 순차 호출 (`async`/`await`)
- API[1] 에서 받은 데이터로, API[2] 호출
- `async`/`await` 로 하면 가독성이 좋음

```html
<button id="loadBtn">데이터 가져오기</button>
<pre id="result"></pre>

<script>
    document.getElementById('loadBtn').addEventListener('click', async () => {
        const resultEl = document.getElementById('result');
        try {
            // 첫 번째 API 호출
            const todoRes = await fetch('https://jsonplaceholder.typicode.com/todos/5');
            if (!todoRes.ok) throw new Error('TODO 요청 실패: ' + todoRes.status);
            const todo = await todoRes.json();

            // userId로 두 번째 API 호출
            const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
            if (!userRes.ok) throw new Error('USER 요청 실패: ' + userRes.status);
            const user = await userRes.json();

            // 결과 합쳐서 출력
            resultEl.textContent = `할일: ${todo.title}\n작성자: ${user.name}\n\n${JSON.stringify(todo, null, 2)}`;
        } catch (error) {
            resultEl.textContent = "에러 발생: " + error;
        }
    });
</script>
```

<br>

### `fetch()` - 여러 API 순차 호출 (`then`)
- API[1] 에서 받은 데이터로, API[2] 호출
- `fetch`/`then`으로 하면 가독성이 떨어짐

<br>

```html
<button id="loadBtn">데이터 가져오기</button>
<pre id="result"></pre>

<script>
    document.getElementById('loadBtn').addEventListener('click', () => {
        const resultEl = document.getElementById('result');
        fetch('https://jsonplaceholder.typicode.com/todos/5')
            .then(todoRes => {
                if (!todoRes.ok) throw new Error('TODO 요청 실패: ' + todoRes.status);
                return todoRes.json();
            })
            .then(todo => {
                // todo.userId로 두 번째 fetch!
                return fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)
                    .then(userRes => {
                        if (!userRes.ok) throw new Error('USER 요청 실패: ' + userRes.status);
                        return userRes.json();
                    })
                    .then(user => {
                        // todo, user 둘 다 필요하므로 객체로 묶어서 반환
                        return { todo, user };
                    });
            })
            .then(({ todo, user }) => {
                resultEl.textContent = `할일: ${todo.title}\n작성자: ${user.name}\n\n${JSON.stringify(todo, null, 2)}`;
            })
            .catch(error => {
                resultEl.textContent = "에러 발생: " + error;
            });
    });
</script>
```