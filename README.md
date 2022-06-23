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

### Nest.JS 서버 배포하기

Heroku
앱 생성, Heroku Git으로 하거나 GitHub 연동

### Heroku에서 빌드하는 명령어 및 prestart 명령 추가

"prestart:prod": "rimraf dist && npm run build",
"web": "npm run start:prod"

### main.ts에 cors, port 설정

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
```

### Settings 탭에서 Config Vars 추가

NPM_CONFIG_PRODUCTION : false
NODE_ENV : production

추가로 DB key 같은 것도 추가

이후에 배포
