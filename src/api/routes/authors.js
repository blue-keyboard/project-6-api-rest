const {
   getAuthors,
   getAuthorById,
   postAuthor,
   putAuthor,
   deleteAuthor
} = require('../controllers/authors')

const authorsRouter = require('express').Router()

authorsRouter.get('/:id', getAuthorById)
authorsRouter.get('/', getAuthors)
authorsRouter.post('/', postAuthor)
authorsRouter.put('/:id', putAuthor)
authorsRouter.delete('/:id', deleteAuthor)

module.exports = authorsRouter
