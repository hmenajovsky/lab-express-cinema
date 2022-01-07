const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
	title: String,
	director: String,
	stars: Array,
    image: String,
    description: String,
    showtimes: Array
});

const Movie = model("Movies", movieSchema);

module.exports = Movie;