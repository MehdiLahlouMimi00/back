const mongoose = require("mongoose");

const plainteSchema = mongoose.Schema({
    Date : {
        type : String
    },

    Profile : {
        type : Object
    },

    type : {
        type : String
    },

    importance : {
        type : String
    },

    data : {
        type : Object
    }
},{ timestamps: true }
);


const Plainte = mongoose.model("Plaintes", plainteSchema);
module.exports = Plainte;