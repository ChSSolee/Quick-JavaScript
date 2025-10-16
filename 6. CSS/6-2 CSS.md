## CSS 주요 기능

<br>

### 1. 텍스트 스타일링 

```css
h1 {
    color: #0055aa;
    text-align: center;
    letter-spacing: 2px;
    border-bottom: 2px solid #0055aa;
    padding-bottom: 10px;
}
h2 {
    color: #0055aa;
    text-align: center;
    margin-top: 20px;
    font-size: 1.5em;
}
```

<br>

### 2. 박스(블록) 스타일링

```css
.card {
    width: 300px;
    margin: 30px auto;
    padding: 20px;
    border-radius: 16px;
    background: #f4f8fb;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

<br>

### 3. 버튼 스타일링 및 마우스 오버 효과

```css
.my-btn {
    display: inline-block;
    padding: 10px 20px;
    background: #2e7d32;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
    font-weight: bold;
}
.my-btn:hover {
    background: yellow;
}
```

<br>

### 4. 레이아웃(배치) - flex 사용

```css
.flex-row {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 24px;
}
.item {
    flex: 1;
    background: #e3f2fd;
    padding: 14px;
    text-align: center;
    border-radius: 10px;
}
.test123 {
    width: 300px;
    height: 200px;
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```