const Router = require ('express').Router();
const citiesControllers = require('../controllers/citiesController');
const itineraryControllers = require('../controllers/itineraryController');
const authController = require('../controllers/authController')
const passport = require('../config/passport')
const validator = require('../config/validator')
const activitiesController = require ('../controllers/activitiesController')
const likeController = require("../controllers/likeController")

Router.route('/cities')
.get(citiesControllers.returnCities)
.post(citiesControllers.createCity)

Router.route('/city/:id')
.get(citiesControllers.returnCity)
.post(citiesControllers.createCity)
.delete(citiesControllers.deleteCity)
.put(citiesControllers.modifyCity)

Router.route('/itinerary')
.get(itineraryControllers.returnItineraries)
.post(itineraryControllers.createItinerary)

Router.route('/itinerary/:id')
.get(itineraryControllers.returnItineraries)
.post(itineraryControllers.createItinerary)
.delete(itineraryControllers.deleteItinerary)
.put(itineraryControllers.modifyItinerary)

Router.route("/itineraries/:city")
.get(itineraryControllers.returnItinerariesByCity)

Router.route("/auth/signup")
.get(authController.readUsers)
.post(validator, authController.signUpUser)

Router.route("/auth/signin")
.post( authController.signInUser)

Router.route("/auth")
.get(passport.authenticate("jwt", {session: false}), authController.token)

Router.route("/activities")
.post(activitiesController.getActivities)
.get(activitiesController.getActivitiesTest)

Router.route("/activity")
.post(activitiesController.upLoadActivity)

Router.route("/like")
.put(likeController.like)

Router.route("/comments")
.get(itineraryControllers.getComments)
.post(itineraryControllers.postComment)
.put(itineraryControllers.editComment)
.delete(itineraryControllers.deleteComment)

module.exports = Router