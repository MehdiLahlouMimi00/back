const mongoose = require("mongoose");

const ondeSchema = mongoose.Schema({
    Login : {
        type : String,
        required : [true, 'login']
    },

    Password : {
        type : String,
        required : [true, 'pass']
    }
});

const Onde = mongoose.model("ONDE", ondeSchema);
module.exports = Onde;