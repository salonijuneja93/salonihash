
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Add a new book
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

// Fetch all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Update book status
router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
            