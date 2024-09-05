const Author = require('../../api/models/authors')
const Book = require('../../api/models/books')
const authors = require('../../data/authors')
const books = require('../../data/books')
const mongoose = require('mongoose')

const seedAuthors = async () => {
   try {
      await Author.collection.drop()
      console.log('authors deleted')

      await Author.insertMany(authors)
      console.log('authors introduced')
   } catch (error) {
      console.log(error, 'error seedAuthors')
   }
}

const seedBooks = async () => {
   try {
      await Book.collection.drop()
      console.log('Books deleted')

      await Book.insertMany(books)
      console.log('Books introduced')
   } catch (error) {
      console.log(error, 'error seedBooks')
   }
}

const formCollectionRelations = async () => {
   const authors = await Author.find()
   const books = await Book.find()

   for (const author of authors) {
      for (const bookString of author.books_string) {
         const book = books.find((book) => book.title === bookString)
         book.authors.push(author._id)
         author.books.push(book._id)
         await Book.findOneAndUpdate(book._id, book, { new: true })
         await Author.findOneAndUpdate(author._id, author, { new: true })
      }
   }
   console.log('updated collections')
}

const seedScript = async () => {
   try {
      await mongoose.connect(
         'mongodb+srv://bluekeyboard:FBg2vODaMT25pkgs@cluster0.ewljo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
      )
      await seedAuthors()
      await seedBooks()
      await formCollectionRelations()
      await mongoose.disconnect()
   } catch (error) {
      console.log(error, 'seed script')
   }
}

seedScript()
