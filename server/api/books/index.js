const express = require("express");
const router = express.Router();

const Book = require("./models/Book");
const Chapter = require("./models/Chapter");

const sendError = (res, error) => {
  res.status(500).json({
    message:
      "Avisa o seu Namorado que Deu Erro no Servidor (Ah é,Eu te Amo Muito Também)\nAproveita e manda print disso: " +
      error,
  });
};

router.get("/", async (req, res) => {
  try {
    res.status(200).json({
      books: await Book.find().all(),
      chapters: await Chapter.find().all(),
    });
  } catch (error) {
    sendError(res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { chapterId, comments, emoji } = req.body;

    const chapter = await Chapter.findById(chapterId);

    chapter.comments = comments;
    chapter.emoji = emoji;

    await chapter.save();

    res.status(200).json({ message: "ok" });
  } catch (error) {
    sendError(res, error);
  }
});

module.exports = router;
