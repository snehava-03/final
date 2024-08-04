const mongoose = require('mongoose');

const finalSchema = new mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

const BlogModel = mongoose.model('Final', finalSchema, 'final');

module.exports = BlogModel;
