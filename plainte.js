const mongoose = require("mongoose");

const plainteSchema = mongoose.Schema({
    Date : {
        type : String,
        required : [true, "Date obligatoire"]
    },

    Profile : {
        type : Object,
        required : [true, "oui"]
    },

    type : {
        type : String,
        required : [true, "oui"]
    },

    importance : {
        type : String,
        required : [true, "oui"]
    },

    data : {
        type : Object,
        required : [true, "oui"]
    }
},{ timestamps: true }
);


const Plainte = mongoose.model("Plaintes", plainteSchema);
module.exports = Plainte;