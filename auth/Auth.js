const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User  } = require('../db/Models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config()

const SECRET = process.env.APP_SECRET;


const signToken = payload => jwt.sign(payload, SECRET);

// creating user signup
// passport.use('signup', new LocalStrategy({
//     passReqToCallback : true,
//     usernameField : 'username',
//     passwordField : 'password'
// }, async (req,username, password, done) => {
//     try {
        
//         const user = await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             username,
//             password
//         });
//         if(!user){
//             return done(null,false, {msg: 'Unable to create user'})
//         }
//         done(null, user);
//     } catch (error) {
//         done(error);
//     }
// }
// ));

passport.use('login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password'
}, async (email, password, done) => {
    try {
        // finding users from db 
        const user = await User.findOne({
            where: {
                email:email
            }
        });
        if(!user){
            return done(null, false,{msg:'user not found'})
        }
        const validateUser = await bcrypt.compare(password, user.password);
        if(!validateUser){
            return done(null,false, {msg:'could not validate user password'})
        }
        // return user if validated
        return done(null, user, {msg: 'User is validated and logged in'});
    } catch (error) {
        return done(error);
    }
}
));

passport.use(new JWTStrategy({
    secretOrKey: SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (token, done) => {
    try {
        const user = await User.findbyPk(token.id);
        user ? done(null,user): done(null,false);
    } catch (error) {
        done(error)
    }
}
));


// checking Auth from JWT
const userAuthorized = (req,res,next) => {
    passport.authenticate('jwt', {session:false}, async (error, token) => {
        if (error || !token) {
            // response.status(401).json({ message: 'Unauthorized' });
            let err = new Error('*** Sorry Try Again ***');
            err.status = 401;
            next(err)
        }
        try {
            const user = await User.findOne({where: {id: token.id}});
            req.user = user
        } catch (error) {
            next(error)
        }
        next();
    })(req,res,next)
}

module.exports = {
    userAuthorized,
    passport,
    signToken
}