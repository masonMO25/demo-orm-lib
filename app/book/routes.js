import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/seed", (_, res) => {
  controller
    .seed()
    .then(() => {
      res.json({ message: "Seeded books" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

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
