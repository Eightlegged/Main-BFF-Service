# Main-BFF-Service

Smart Meeting Assistant 어플리케이션의 Single Page Application 기반의 Backend For Frontend 서비스


### 사용 프레임워크(런타임 및 버전 상세 필요)
* Node.js
* React.js
* Express

### 프로젝트 구조
Express기반의 서버에 React.js로 구현한 프론트엔드 어플리케이션을 빌드하여 배포    

### 의존성 설치

<code>
$ npm install
</code>

### 로컬 리액트 앱 구동
main-bff-service 디렉토리에서 다음 명령어 실행

<code>
$ npm start
</code>

이후 http://localhost:8001 에서 어플리케이션 테스트
(로컬 앱 실행시 모든 기능이 완벽하게 제공되지 않음.)

### BFF 빌드 및 구동
main-bff-service 디렉토리에서 다음 명령어 실행

<code>
$ npm run startbff
</code>

이후 http://localhost:3000에서 테스트

### Bluemix app
https://react-test-app.mybluemix.net/ 에서 PaaS 배포 확인 가능
