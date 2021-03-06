const mongoose = require('mongoose')
const {Schema} = mongoose;

const snapSchema = new Schema({
    user_id : {
      type : Schema.Types.ObjectID
    },

    text : {
        type: String,
        required : true
    },

    category_id : {
        type : Schema.Types.ObjectID
    },

    createdAt : {
        type: Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('snap',snapSchema)