const mongoose = require('mongoose');

const fighterSchema = mongoose.Schema({
    fid: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dob: String,
    state: String,
    img: String
});
module.exports = mongoose.model("Fighter", fighterSchema, "fighters");