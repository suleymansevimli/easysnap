const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type: String,
        required: true
    },
    createdAt: {
        type : Date,
        default : Date.now
    }
})

userSchema.pre('save', function(next) {
    // şifre alanı değiştirilmiyorsa
    if (!this.isModified('password')){
        return next(); // devam et sıkıntı yok
    }

    // şifre alanı değiştiriliyorsa
    bcrypt.hash( this.password, 10 )
        .then( hash => {
            this.password = hash;
            next();
        })
        .catch(e => {
            console.log("Error hashing password !")
        })
})

module.exports= mongoose.model('user', userSchema)
