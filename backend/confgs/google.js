const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
require('dotenv').config()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const BACKEND_CALLBACK_URL = process.env.BACKEND_CALLBACK_URL;

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: `${BACKEND_CALLBACK_URL}/auth/google/callback`,
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, done) {
			// console.log(profile)//!--> consoling profile;
			done(null, profile);
		}
	)
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


module.exports = passport;