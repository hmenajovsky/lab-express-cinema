const router = require("express").Router();
const Movies = require("../models/Movie.model");
const mongoose = require("mongoose");
/**
 * !Here the routes are prefixed with /movies
 */

router.get("/", (req, res) => {
	Movies.find()
		.then((dbResponse) => {
			res.render("movies.hbs", {
				movies: dbResponse,
				css: ["movies", "template"],
			});
		})
		.catch((e) => console.error(e));
});

router.get("/:id", (req, res, next) => {
	console.log(req.params);
	const isValidId = mongoose.isValidObjectId(req.params.id);
	const id = req.params.id;
	if (isValidId) {
		Movies.findById(id)
			.then((movie) => {
				res.render("movie.hbs", {
					movie,
					css: ["movie","template"],
				});
			})
			.catch((e) => console.error(e));
	} else {
		next();
	}
});

module.exports = router;