const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const port = process.env.PORT || 3000;
const bookRouter = express.Router();

app.get('/', (req, res) => {
  res.send('Hello Nodemon API!');
});

app.use('/api', bookRouter);

bookRouter.route('/books').get((req, res) => {
  const query = {};

  if (req.query.genre) {
    query.genre = req.query.genre;
  }

  Book.find(query, (error, books) => {
    return error ? res.send(error) : res.json(books);
  });
});

bookRouter.route('/books/:bookId').get((req, res) => {
  Book.findById(req.params.bookId, (error, book) => {
    return error ? res.send(error) : res.json(book);
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
