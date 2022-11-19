const express = require("express"); //express 불러오기
const path = require("path"); //경로 설정
const morgan = require("morgan"); //서버에 요청 응답기록
const cookieParser = require("cookie-parser");

const app = express(); //express app에 할당

app.set("port", process.env.PORT || 3000); //포트할당

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
// 앞에는 요청경로 뒤에는 실제 경로
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //true면 qs, false면 querystring

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  ㅇㅇ;
});

app.post("/", (req, res) => {
  res.send("hello express");
});

app.get("/category/Javascript", (req, res) => {
  res.send("hello Javascript");
});

app.get("/about", (req, res) => {
  res.send("hello express");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send("에러발생");
});

app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
