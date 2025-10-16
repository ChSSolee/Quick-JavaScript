## CDN(Content Delivery Network)
- 파일을 빠르게 전달해주는 네트워크
- 외부에 있는 스크립트를 가져와서 실행시켜줌 (설치해서 사용하는 라이브러리와는 다름)

<br>

#### `lodash` : 배열을 다루는 라이브러리

```html
<!-- lodash를 CDN에서 불러오기 -->
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
<script>
  // lodash 라이브러리의 _.chunk 함수 사용
  const arr = [1,2,3,4,5,6];
  const chunked = _.chunk(arr, 2); // [[1,2],[3,4],[5,6]]
  console.log(chunked);
</script>
```

<br>

#### 구글폰트의 CDN 링크 사용

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
<style>
    .fancy {
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
        font-weight: 700;
    }
    .normal {
        font-size: 2rem;
        font-weight: 700;
    }
</style>
```