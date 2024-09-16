const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema(
   {
      name: { type: String, required: true, trim: true },
      birthdate: { type: Date, required: true },
      nationality: { type: String, trim: true },
      books_string: [{ type: String, trim: true }],
      books: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
         }
      ]
   },
   {
      timestamps: true
   }
)

const Author = mongoose.model('Author', authorSchema, 'Authors')

module.exports = Author
