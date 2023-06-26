import express from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

// обработчик событий на приложение
app.use((req, res, next) => {
	console.log('Время ', Date.now());
	next();
})

app.get("/hello", (req, res) => {
  // res.send("Hello world!");
	// res.end();
	throw new Error('Error!!!');
});

app.use("/users", userRouter);

// обработка ошибок
app.use((err, req, res, next) => {
	console.log(err.message);
	res.status(500).send(err.message);
})

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
