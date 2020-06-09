const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Users = require('./db').Users

passport.serializeUser(function (user, done){ //defines how to store the user in the session
    done(null, user.username)
})

passport.deserializeUser(function (username, done){ //tells us how to recover the actual user object from the session
    Users.findOne({
        username: username
    }).then((user) => {
        if(!user){
            return done(new Error("No such user"))
        }
        return done(null, user)
    }).catch((err) => {
        done(err)
    })
})

//The local authentication strategy authenticates users using a username and password. 
//The strategy requires a verify callback, which accepts these credentials and calls done providing a user.

passport.use(new LocalStrategy(function (username, password, done){
    Users.findOne({
        where: {
            username: username
        }
    }).then((user)=>{
        if(!user){
            return done(null, false, {message: "No such user"})
        }
        if(user.password !== password){
            return done(null, false, {message: "Wrong password"})
        }
        return done(null, user)
    }).catch((err)=>{
        return done(err)
    })
}))

exports = module.exports = passport