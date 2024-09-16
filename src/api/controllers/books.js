const Book = require('../models/books')

const getBooks = async (req, res, next) => {
   try {
      const books = await Book.find().populate('authors')
      return res.status(200).json(books)
   } catch (error) {
      return res.status(400).json(error)
   }
}

const getBookById = async (req, res, next) => {
   try {
      const { id } = req.params
      const book = await Book.findById(id).populate('authors')
      return res.status(200).json(book)
   } catch (error) {
      return res.status(400).json(error)
   }
}

const getBooksByCategory = async (req, res, next) => {
   try {
      const { category } = req.params
      const books = await Book.find({ categories: category }).populate(
         'authors'
      )
      return res.status(200).json(books)
   } catch (error) {
      return res.status(400).json(error)
   }
}

const postBook = async (req, res, next) => {
   try {
      const newBook = new Book(req.body)
      const savedBook = await newBook.save().populate('authors')
      return res.status(201).json(savedBook)
   } catch (error) {
      return res.status(400).json(error)
   }
}

const putBook = async (req, res, next) => {
   try {
      const { id } = req.params
      const newBook = new Book(req.body)
      newBook._id = id

      if (!req.body.authors) {
         const { authors } = await Book.findById(id)
         newBook.authors = authors
      }

      const bookUpdated = await Book.findByIdAndUpdate(id, newBook, {
         new: true,
         runValidators: true
      }).populate('authors')

      return res.status(200).json(bookUpdated)
   } catch (error) {
      return res.status(400).json(error.message)
   }
}

const deleteBook = async (req, res, next) => {
   try {
      const { id } = req.params
      const bookDeleted = await Book.findByIdAndDelete(id).populate('authors')
      return res.status(200).json(bookDeleted)
   } catch (error) {
      return res.status(400).json(error)
   }
}

module.exports = {
   getBooks,
   getBookById,
   getBooksByCategory,
   postBook,
   putBook,
   deleteBook
}
