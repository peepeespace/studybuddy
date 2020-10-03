/*
Studybuddy platform frontend server
*/
const express = require("express");
const path = require("path");
var cors = require("cors");

const PORT = 8889;
const HOST = "0.0.0.0";

const app = express(); // 앱 시작
app.set("views", `${__dirname}/dist`); // HTML 파일 연결
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(cors());
app.use(express.static(`${__dirname}/dist`)); // CSS 파일 연결

app.listen(PORT, HOST);
console.log(`서버가 http://${HOST}:${PORT} 에서 작동하고 있습니다.`);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/english", (req, res) => {
  res.render("english.html");
});

app.get("/coding", (req, res) => {
  res.render("coding.html");
});

app.get("/main-english", (req, res) => {
  res.render("main_english.html");
});

app.get("/main-coding", (req, res) => {
  res.render("main_coding.html");
});
