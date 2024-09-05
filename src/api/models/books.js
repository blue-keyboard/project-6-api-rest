const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
   {
      title: { type: String, required: true, trim: true },
      pages: { type: Number, required: true },
      categories: [
         {
            type: String,
            enum: [
               'fiction',
               'non_fiction',
               'mistery',
               'fantasy',
               'science_fiction',
               'biografy',
               'history',
               'poetry',
               'satire',
               'adventure',
               'romance',
               'drama'
            ]
         }
      ],
      img: { type: String, required: true },
      authors_string: [{ type: String, required: true }],
      authors: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author',
            set: (books) => Array.from(new Set(books))
         }
      ]
   },
   {
      timestamps: true,
      collection: 'Books'
   }
)

const Book = mongoose.model('Book', bookSchema, 'Books')

module.exports = Book
