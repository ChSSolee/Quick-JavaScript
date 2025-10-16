## CORS(Cross-Origin Resource Sharing)
- **CORS는 "브라우저 보안 정책"**

    - **즉, 브라우저 → API 요청에서만 작동**
    - **서버 → 서버 요청에는 CORS가 전혀 적용되지 않음**
- 브라우저에서 API요청을 하는데 서버에서 허락하지 않으면 CORS오류가 발생

<br>

- 시나리오
  - 내가 A사이트(은행 등)에 로그인한 상태에서
  - B사이트(악성 사이트)가 A사이트에 요청을 보내서 - fetch("https://A사이트.com/mybalance")
  - 내 정보를 가져가게 하는 것을 막기 위함

<br>

> A사이트에 내 로그인한 상태로 브라우저를 쓰고 있는데
>
> B 사이트에서 API호출을 해서 A사이트에 가지고 있는 쿠키를 자동으로 보내는 일이 생길 수도 있음

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