const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
	title: { type: String, required: true },
	description: { type: String, required: true },
	createdAt: { type: Date, default: Date.now() },
	img: { type: String },
	likes: [
		{
			userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
		},
	],
	comments: [
		{
			userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
			createdAt: { type: Date, default: Date.now() },
			comment: { type: String, required: true },
		},
	],
});
const PostModel = mongoose.model("post", postSchema);
module.exports = {
	PostModel,
};
