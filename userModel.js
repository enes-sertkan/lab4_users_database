const mongoose = require('mongoose');

const geoSchema = new mongoose.Schema({
    lat: { type: String, required: true },
    lng: { type: String, required: true }
}, { _id: false });

const addressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String, required: true, match: /^[a-zA-Z\s]*$/ },
    zipcode: { type: String, required: true, match: /^\d{5}-\d{4}$/ },
    geo: geoSchema
}, { _id: false });

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true }
}, { _id: false });

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, minlength: 4 },
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    address: addressSchema,
    phone: { type: String, required: true, match: /^1-\d{3}-\d{3}-\d{4}$/ },
    website: { type: String, required: true, match: /^(http|https):\/\/[^ "]+$/ },
    company: companySchema
});

module.exports = mongoose.model('User', userSchema);
