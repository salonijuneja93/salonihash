
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, enum: ['Read', 'Unread'], default: 'Unread' }
});

module.exports = mongoose.model('Book', BookSchema);
            