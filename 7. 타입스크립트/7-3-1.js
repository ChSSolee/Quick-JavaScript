// user 정보를 받아오는 예제 (자바스크립트)
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(user => {
    console.log('이름:', user.name);
    console.log('이메일:', user.email);
  })
  .catch(err => {
    console.error('에러 발생:', err);
  });