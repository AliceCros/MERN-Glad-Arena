const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create gladiators Schema & model
const GladiatorSchema = new Schema(
    {
        type: {
            type: String,
            enum: ['Epéiste', 'Lancier', 'Cavalier', 'Archer', 'Animal'],
            default: 'Epéiste'
        },
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        weapon: {
            type: String,
            enum: ['épée à une main', 'épée à deux mains', 'none'],
            default: 'none'
        },
        available: {
            type: Boolean,
            default: false
        }
    }
);

const Gladiator = mongoose.model('gladiator', GladiatorSchema);

module.exports = Gladiator;