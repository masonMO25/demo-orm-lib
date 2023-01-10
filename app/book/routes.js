import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/", (_, res) => {
  controller
    .findAllBooks()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

export default Router;
