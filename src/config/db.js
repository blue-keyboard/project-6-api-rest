const mongoose = require('mongoose')

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.DB_URL)
      console.log('Conectado a la bbdd')
   } catch (error) {
      console.log('algo ha salido mal', error)
   }
}

module.exports = connectDB
