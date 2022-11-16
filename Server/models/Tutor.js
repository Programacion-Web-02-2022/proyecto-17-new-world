const { Schema, model } = require('mongoose');
const { string } = require('prop-types');

const Tutorchema = Schema ({

    name: {
        type: String,
        require: true
    },
    career: {
        type: String,
        require: true
    },
    teacher: {
        type: String
    },
    skill: {
        type: String,
        require: true
    },
    horary: {
        type: String,
        require: true
    },
    stars: {
        type: String
    }
})

module.exports = model('Tutor', Tutorchema );