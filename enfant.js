const mongoose = require("mongoose");

const enfantSchema = mongoose.Schema({
    Nom : {
        type : String,
        required : [true, 'oui']
    },

    Prenom : {
        type : String,
        required : [true, 'oui']
    },

    Age : {
        type : Number,
        required : [true, 'oui']
    },

    Ville : {
        type : String,
        required : [true, 'oui']
    },

    Ecole : {
        type : String,
        required : [true, 'oui']
    },

    NivScolaire : {
        type : String,
        required : [true, 'oui']
    },

    mail : {
        type : String
    },

    genre : {
        type : String,
        required : [true, "le genre"]
    },

    password : {
        type : String
    },

    psychiatre : {
        type : String
    }
});

const Enfant = mongoose.model("Enfants", enfantSchema);
module.exports = Enfant;