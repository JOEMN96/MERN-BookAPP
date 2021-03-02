import Book from "../models/book.js";

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ errormessage: error.message });
  }
};

const addBook = async (req, res) => {
  const post = req.body;

  const newBook = new Book(post);
  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export { getBooks, addBook };
