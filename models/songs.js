// Insert your code here
const mongoose = require('mongoose');

const  songsSchema = mongoose.Schema({
    annoying: Boolean,
    artist: String,
    creationDate: Date,
    title: String,
});

const Songs = mongoose.model('songs', songsSchema);

module.exports = Songs;
