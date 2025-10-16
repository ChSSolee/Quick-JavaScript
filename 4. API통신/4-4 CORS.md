## CORS(Cross-Origin Resource Sharing)
- 브라우저에서 API요청을 하는데 서버에서 허락하지 않으면 CORS오류가 발생

<br>

1. 그냥 외부 주소에서 API요청을 하면 막는구나
- 반복된 API요청을 막기위한 건가?
- 그렇다면 그냥 포스트맨으로 반복요청하면 되는데 왜 그런거지?

<br>

2. 내 의도와 다르게 다른 사이트에서 요청하고 읽지 않게 보호

<br>

3. 시나리오
- 내가 A사이트(은행 등)에 로그인한 상태에서
- B사이트(악성 사이트)가 A사이트에 요청을 보내서 - fetch("https://A사이트.com/mybalance")
- 내 정보를 가져가게 하는 것을 막기 위함

<br>

- A사이트에 내 로그인한 상태로 브라우저를 쓰고 있는데
- B 사이트에서 API호출을 해서 A사이트에 가지고 있는 쿠키를 자동으로 보내는 일이 생길 수도 있음

<br>

```html
<script>
    document.getElementById('btn').onclick = () => {
        fetch('https://www.google.com') // 구글은 CORS 허용 X
            .then(res => res.text())
            .then(data => {
                document.getElementById('result').textContent = data;
            })
            .catch(e => {
                document.getElementById('result').textContent = "에러: " + e;
            });
    };
</script>
```