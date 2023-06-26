import express from "express";

const port = 8000;
const app = express();

// app.all("/hello", (req, res, next) => {
//   console.log("All");
//   next();
// });

app.get("/hello", (req, res) => {
  // res.set("Content-Type", "text/plain");
  // res.append("Warning", "code");
  // res.cookie("token", "fsfsfsdf", {
  //   domain: "",
  //   path: "/",
  //   secure: true,
  //   expires: 60000,
  // });
	// res.clearCookie('token', {path});
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
