# Main-BFF-Service

Smart Meeting Assistant 어플리케이션의 Single Page Application 기반의 Backend For Frontend 서비스



### 사용 프레임워크(런타임 및 버전 상세 필요)
* React.js
* Socket.io
* Spring-Boot
* Maven

### 프로젝트 구조
React.js 기반의 앱을 빌드하여 Spring Boot의 static파일로 포함시켜 Maven 빌드를 통하여 PaaS상에 배포

### 로컬 구동
main-bff-service/main-application 이동 후 다음 명령어 실행

\'$ npm start\'

이후 http://localhost:3000 에서 테스트

### 기능
> 메인(디폴트 서비스 소개 페이지)
>> 로그인  로그인 페이지(폼 제공)
>>> 성공 - 메인 리다이렉트
>>> 실패 - 페이지 유지(실패 사유 반환)
>> 회원가입 - 회원가입 페이지(폼 제공)
>>> 성공 - 회의 리스트 페이지 리다이렉트
>>> 실패 - 페이지 유지(실패 사유 반환)
>> 유저정보 - 유저정보 페이지
>>> 유저정보 수정 - 유저정보 수정 페이지(폼)
>>>> 성공
>>>> 실패
>> 서비스 소개 - 서비스 소개 페이지
>> 회의 리스트 - 회원 리스트 페이지
>>> 회의 만들기 - 회의 만들기 페이지(폼 제공)
>>>> 성공 - 회의 리스트 페이지 리다이렉트
>>> 회의 보기 - 회의 보기 페이지
>>>> 회의 시작 == 회의 종료
