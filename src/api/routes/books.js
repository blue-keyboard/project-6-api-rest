const {
   getBooks,
   getBookById,
   getBooksByCategory,
   postBook,
   putBook,
   deleteBook
} = require('../controllers/books')

const booksRouter = require('express').Router()

booksRouter.get('/category/:category', getBooksByCategory)
booksRouter.get('/:id', getBookById)
booksRouter.get('/', getBooks)
booksRouter.post('/', postBook)
booksRouter.put('/:id', putBook)
booksRouter.delete('/:id', deleteBook)

module.exports = booksRouter
