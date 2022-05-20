//urlCode: { mandatory, unique, lowercase, trim }, longUrl: {mandatory, valid url}, shortUrl: {mandatory, unique} }
const mongoose = require("mongoose")

// creating structure of collection
let urlSchema = new mongoose.Schema({
    urlCode: { type: String, trim: true, required: true, lowercase: true, unique: true },
    longUrl: { type: String, trim: true, required: true },
    shortUrl: { type: String, required: true, trim: true, unique: true },



}, { timestamps: true });

// creating collection 
module.exports = mongoose.model('Url', urlSchema)