const Author = require('../models/authors')

const getAuthors = async (req, res, next) => {
   try {
      const authors = await Author.find().populate('books')
      return res.status(200).json(authors)
   } catch (error) {
      return res.status(400).json(error)
   }
}

const getAuthorById = async (req, res, next) => {
   try {
      const { id } = req.params
      const author = await Author.findById(id).populate('books')
      return res.status(200).json(author)
   } catch (error) {
      return res.status(400).json(error)
   }
}

const postAuthor = async (req, res, next) => {
   try {
      const newAuthor = new Author(req.body)
      const savedAuthor = await newAuthor.save().populate('books')
      return res.status(201).json(savedAuthor)
   } catch (error) {
      return res.status(400).json(error)
   }
}

const putAuthor = async (req, res, next) => {
   try {
      const { id } = req.params
      const { books } = await Author.findById(id)
      const newAuthor = new Author(req.body)
      newAuthor._id = id
      newAuthor.books = [...new Set([...books, ...req.params.books])]

      const authorUpdated = await Author.findByIdAndUpdate(id, newAuthor, {
         new: true
      }).populate('books')

      return res.status(200).json(authorUpdated)
   } catch (error) {
      return res.status(400).json('error')
   }
}

const deleteAuthor = async (req, res, next) => {
   try {
      const { id } = req.params
      const authorDeleted = await Author.findByIdAndDelete(id).populate('books')
      return res.status(200).json(authorDeleted)
   } catch (error) {
      return res.status(400).json(error)
   }
}

module.exports = {
   getAuthors,
   getAuthorById,
   postAuthor,
   putAuthor,
   deleteAuthor
}
