// 1. User 타입 정의
type User = {
    id: number;
    name: string;
    email: string;
};

// 2. fetch 함수로 API 호출 (타입 명시)
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then((user: User) => {
    // 타입스크립트는 컴파일 타임에 user.name, user.email의 타입, 존재 여부를 검사!
    console.log('이름:', user.name);
    console.log('이메일:', user.email);
    console.log('아이디:', user.id);

})
.catch(err => {
    console.error('에러 발생:', err);
});
  