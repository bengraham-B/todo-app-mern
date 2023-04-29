const User = require('../model/User') //^ Importing the User model which will be used to send and retrieve data from the database.

//~ =====================================================================================Function which handles errors
const handleErrors = (err) => {
    console.log(err.message, err.code)

    let errors = {email: '', password: ''} //^ Updates the object with the corrosponding errors and returns it so it can then be displayed.

    //~ This error checks if there is already a email the user submitted in the database.
    if(err.code === 11000 ){
        errors.email = 'That Email is already registered'
    }

    //~ Validation Erros
    //~ Taking their message and assiging it to the correct item within the errors object.
    //~ These errors, involves the user entering a non-valid email or their password is shorter then 6 characters
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties} )=> {
            errors[properties.path] = properties.message //^ Updating the errors object on line 6.
        })
    }
    return errors 

}

const maxAge = 3 * 24 * 60 * 60 //^ value of three days in seconds
//& ===================================================================================== Function Which Creates a JWT TOKEN
const createToken = (id) => {
    //& id comes from mongoDB, when a user is created.
    return jwt.sign({ id }, 'net ninja secret', {
        expiresIn:  maxAge //& How lon will this JWT be valid for. 3 days
    })

}

module.exports.signup_get = (req, res) => {
    res.render('signup') //^ Renders a page
}

module.exports.login_get = (req, res) => {
    res.render('login') //^ Renders a page
}

module.exports.signup_post = async (req, res) => {
    const {email, password} = req.body

    //~ Create a new user
    try {
        const user = await User.create({ email, password }) //^ creating a signup object in the database.
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000}) //^ Setting the cookie, the name is 'JWT' and the value is the jwt generated token. The thrid argument os options.
        res.status(201).json({user: user._id}) //^ Sending back the user object if successful.
    }
    catch(err) {
        const errors = handleErrors(err)

        res.status(400).json({ errors }) //~ Sending the error back to the user in JSON format. if they did not signup correctly.
    }
}

module.exports.login_post = async (req, res) => {
    const {email, password} = req.body
    console.log(email, password)
    res.send("User login")
}
