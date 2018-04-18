const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Fight Schema & model
const FightSchema = new Schema({
    category1: {
        type: String,
        required: [true, 'three categories are required'],
    },
    category2: {
        type: String,
        required: [true, 'three categories are required'],
    },
    animal: {
        type: Boolean,
        required: [true, 'specify if there is an animal'],
    },
    animalName: {
        type: String
    },
    numberAnimal: {
        type: Number,
        default: 0,
    },
    state: {
        type: String,
        enum: ['à venir', 'en cours', 'fini'],
        default: ['à venir'],
        required: [false]
    }
});

const Fight = mongoose.model('fight', FightSchema);

module.exports = Fight;