# climbing-calendar
무지성 클라이밍 계획 달력 만들기

서버 폴더 생성
nest new server

graphql 설치
npm i --save @nestjs/graphql @nestjs/apollo apollo-server-express graphql

graphql 폴더 추가, schedule.graphql 생성
스키마 및 쿼리 추가

리졸브와 모듈 추가

몽구스 설치
npm i --save mongoose



GET 스케쥴 리스트 요청
res [{이름, 지점, 시간, sId} ...]

POST 스케쥴 등록 요청
req {년,월,일, 이름, 지점, 시간, 비번}
res {message}

POST 스케쥴 삭제 요청
req {sId, 비번}
res {message}

DB schema
schedules {
    data : string,
    participants : [
        {
            name : string,
            branch : string,
            time : string,
            password : string,
        }, ...
    ]
}