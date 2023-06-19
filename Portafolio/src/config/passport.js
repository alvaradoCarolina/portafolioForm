// Importacion de passport
const passport = require('passport')

// Importacion del modelo user
const User = require('../models/User')

// Definicion de la estrategia
const LocalStrategy = require('passport-local').Strategy


// Configuracion de la estrategia
passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},async(email,password,done)=>{
    // Traer el usuario en base al email
    const userBDD = await User.findOne({email})
    if(!userBDD) return done("Lo sentimos, el email no se encuentra registrado",false,)
    const passwordUser = await userBDD.matchPassword(password)
    if(!passwordUser) return done("Lo sentimos, los passwords no coinciden",false)
    return done(null,userBDD)
}))

// Serializaoin del usuario
passport.serializeUser((user,done)=>{
    done(null,user.id)
})

// Deserializacion del usuario
passport.deserializeUser(async (id, done) => {
    const userDB  = await User.findById(id).exec();
    return done(null,userDB)
});