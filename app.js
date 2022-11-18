const express = require("express"); //express 불러오기
const path = require("path"); //경로 설정

const app = express(); //express app에 할당

app.set("port", process.env.PORT || 3000); //포트할당

app.use((req, res, next) => {
  console.log("모든 요청에 실행하고싶어요");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", (req, res) => {
  res.send("hello express");
});

app.get("/about", (req, res) => {
  res.send("hello express");
});

app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
