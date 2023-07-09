const express = require("express");
const GoogleRouter = express.Router();
const passport = require("../confgs/google");
const bcrypt = require("bcrypt");
const UserModel = require("../models/usermodel");
require("dotenv").config();
const FRONTEND_CALLBACK_URL = process.env.FRONTEND_CALLBACK_URL;
let RedirectLink = `${FRONTEND_CALLBACK_URL}/home`;
let RedirectLink2 = `${FRONTEND_CALLBACK_URL}`;

GoogleRouter.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

GoogleRouter.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: "/auth/login/success",
		failureRedirect: "/auth/login/failed",
	})
);

GoogleRouter.get("/login/success", async (req, res) => {
	if (!req.user) {
		return res.redirect(`${RedirectLink2}?authsuccess=false`);
	}
	let payload = req.user;

	let userDetails = {
		name: payload.displayName,
		email: payload.emails[0].value,
		gender: "Not Assigned",
		phone: 0,
		password: payload.emails[0].value,
		img: payload.photos[0].value,
		verified: true,
	};
	// console.log(userDetails)
	console.log("Google Auth Accessed by " + userDetails.email);
	try {
		let user = await UserModel.find({ email: userDetails.email });
		if (user.length !== 0) {
			let id = user[0]._id;
			res.redirect(`${RedirectLink}?authsuccess=true&userID=${id}`);
		} else {
			bcrypt.hash(userDetails.email, 10, async (err, hash) => {
				if (hash) {
					userDetails.password = hash;
					let instance = new UserModel(userDetails);
					await instance.save();
					res.redirect(
						`${RedirectLink}?authsuccess=true&userID=${instance._id}`
					);
				}
			});
		}
	} catch (error) {
		console.log(error);
		res.redirect(`${RedirectLink2}?authsuccess=false`);
	}
});
GoogleRouter.get("/login/failed", (req, res) => {
	res.redirect(`${RedirectLink2}?authsuccess=false`);
});

GoogleRouter.get("/logout", (req, res) => {
	req.logout();
	res.redirect(`${RedirectLink2}`);
});

module.exports = GoogleRouter;
