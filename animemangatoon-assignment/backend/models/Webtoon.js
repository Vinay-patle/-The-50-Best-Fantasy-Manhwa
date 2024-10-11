const mongoose = require('mongoose');

// Webtoon Schema
const webtoonSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String
});

const Webtoon = mongoose.model('Webtoon', webtoonSchema);
module.exports = Webtoon;
