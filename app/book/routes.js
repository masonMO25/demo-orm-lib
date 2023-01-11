import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.post("/seed", (_, res) => {
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

router.get("/:isbn", async (req, res) => {
  const { isbn } = req.params;

  const book = await controller.show(isbn).catch((err) => {
    res.status(500).json({ message: err.message });
  });

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: `Book with ISBN ${isbn} not found.` });
  }
});

router.put("/:isbn", async (req, res) => {
  const { isbn } = req.params;

  const updateResults = await controller.update(isbn, req.body).catch((err) => {
    res.status(500).json({ message: err.message });
  });

  if (updateResults) {
    res.json({ message: `Book with ISBN ${isbn} updated.` });
  } else {
    res.status(404).json({ message: `Book with ISBN ${isbn} not found.` });
  }
});

router.delete("/:isbn", async (req, res) => {
  const { isbn } = req.params;

  const deleteResults = await controller.delete(isbn).catch((err) => {
    res.status(500).json({ message: err.message });
  });

  if (deleteResults) {
    res.json({ message: `Book with ISBN ${isbn} deleted.` });
  } else {
    res.status(404).json({ message: `Book with ISBN ${isbn} not found.` });
  }
});

export default router;
