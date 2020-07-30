const mongoose = require('mongoose')
const { Schema } = mongoose


const snapCategorySchema = new Schema({
    name : {
        type : String,
        required : [true, "Kategori adı alanını doldurmak zorundasınız"],
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('snapCategory',snapCategorySchema)