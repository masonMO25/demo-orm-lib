import express from "express";
import bookRouter from "./book/routes.js";
const app = express();
const port = 3000;

// middleware to parse incoming json (POST)
app.use(express.json());

app.use("/api/books", bookRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
