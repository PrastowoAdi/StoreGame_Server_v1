const mongoose = require('mongoose');
let playerSchema = mongoose.Schema({
    email : {
        type : String,
        require : [true, 'email harus diisi']
    },
    name : {
        type : String,
        require : [true, 'nama harus diisi'],
        maxlength : [225, "panjang nama harus antara 3 - 225 karakter"],
        minlength : [3, "panjang nama harus antara 3 - 225 karakter"],
    },
    username : {
        type : String,
        require : [true, 'username harus diisi'],
        maxlength : [225, "panjang username harus antara 3 - 225 karakter"],
        minlength : [3, "panjang username harus antara 3 - 225 karakter"],
    },
    password : {
        type : String,
        require : [true, 'password harus diisi'],
        maxlength : [225, "panjang nama harus antara 225 karakter"]
    },
    role : {
        type : String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    status : {
        type : String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    avatar : {
        type : String
    },
    fileName : {
        type: String
    },
    phoneNumber : {
        type : String,
        require : [true, 'phoneNumber harus diisi'],
        maxlength : [225, "panjang nomor telepon harus antara  9 - 225 karakter"],
        minlength : [9, "panjang nomor telepon harus antara 9 - 225 karakter"],
    },
    favorite : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
}, {timestamps: true})

module.exports = mongoose.model('Player', playerSchema);