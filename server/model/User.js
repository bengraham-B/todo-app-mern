const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:[true, 'Please Enter an Email'], //^ Throws error msg when conditions are not met.
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'] //^ Using the validator libary to validate the email a user has submitted.
    },

    password: {
        type: String,
        required: [true, 'Please Enter a Passwaord'], //^ Throws error msg when conditions are not met.
        minlength: [6, 'Minmum amount of letters is 6'] //^ Throws error msg when conditions are not met.
    }
})
//^ Fire a functionbefore function was saved to DB
//^ This will be used to hash the user's password before it is saved to the databse.
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt() //^ Using bcrypt to add salt to the user's password.
    this.password = await bcrypt.hash(this.password, salt)

    next() //^ Next function to move on to the next middleware
})

//^ Fire a function after the Document saved to the DB
userSchema.post('save', function(doc, next){
    console.log("New user was created and saved", doc)

    next() //^ Next function to move on to the next middleware
})



const User = mongoose.model('user', userSchema)

module.exports = User //^ Exporting the User model so that it can be used within authController.js.