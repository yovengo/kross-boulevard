const {Schema, model} = require('mongoose')

const schema = new Schema({
    brand: {type: Schema.Types.ObjectId, ref: 'Brand'},
    name: {type: String, required: true},
    sex: {type: String, enum: ['male', 'female']},
    sizes: [{type: Number}],
    materials: [{type: Schema.Types.ObjectId, ref: 'Material'}],
    description: {type: String},
    isInStock: {type: Boolean},
    price: {type: Number},
    image: [{type: String}],
}, {
    timestamps: true
})

module.exports = model('Sneakers', schema)