const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
router.post('/', async (req, res) => {
  const { title, author, status } = req.body;
  try {
    const newBook = new Book({ title, author, status });
    await newBook.save();
    res.json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
});
module.exports = router;