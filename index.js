require('dotenv').config()
const express = require('express')
const connectDB = require('./src/config/db')
const booksRouter = require('./src/api/routes/books')
const authorsRouter = require('./src/api/routes/authors')

const app = express()
app.use(express.json())

connectDB()

app.use('/api/v1/books', booksRouter)
app.use('/api/v1/authors', authorsRouter)

app.use('*', (req, res, next) => {
   return res.status(404).json('Route not found')
})

app.listen(3000, () => {
   console.log('http://localhost:3000 🤗')
})
