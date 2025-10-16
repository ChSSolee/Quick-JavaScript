## node, npm, yarn
- node, yarn, npm는 **JavaScript(특히 Node.js 생태계)** 에서 패키지(라이브러리) 관리 및 실행에 관련된 도구들

<br>

### `Node.js`
- 자바스크립트를 브라우저 밖(서버, 터미널 등)에서 실행할 수 있게 해주는 런타임 환경
- 주요 역할:
    - 서버 사이드 코드 실행
    - 백엔드 서버, CLI 도구, 빌드 툴 등에 사용
    - npm이 Node.js에 기본 포함됨

<br>

### npm (Node Package Manager)
- `Node.js`에 기본 탑재된 패키지 관리자
- 전 세계의 개발자들이 만든 수많은 오픈소스 라이브러리를 설치하고 관리

```bash
$ npm init -y      # 새 프로젝트 초기화 (package.json 생성)
$ npm install axios # 라이브러리 설치
$ npm run start     # package.json에 정의된 start 스크립트 실행
```

<br>

### Yarn
- Facebook(메타)이 만든 npm 대체 패키지 관리자
- npm보다 속도, 캐싱, 보안(락파일 관리) 등을 개선하기 위해 등장


```bash
$ yarn init -y
$ yarn add axios
$ yarn start
```

- 설치 속도가 npm보다 빠름
- yarn.lock 파일로 의존성 버전을 엄격히 관리