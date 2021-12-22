const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    name:{type:String, required: true},
    src:{type:String, required: true},
    title:{type:String, requiered: true},
    price:{type: Number, required: true },
    duration: {type: Number, required: true },
    likes: { type: [String] },
    hashtags: {type: [] },
    comments: {type: [] },
    city: {type: mongoose.Types.ObjectId, ref:'city'}
})

const Itinerary = mongoose.model("itinerary", itinerarySchema )

module.exports = Itinerary;