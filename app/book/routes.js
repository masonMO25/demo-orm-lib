import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("GET /api/books");
});

export default Router;
