const { PostModel } = require("../models/post.model");

const { Router } = require("express");

const postRouter = Router();

postRouter.post("/addpost", async (req, res) => {
	try {
		const { userId, title, description } = req.body;
		const post = new PostModel({
			userId,
			title,
			description,
		});
		await post.save();
		res.json({ message: "post added successfully" });
	} catch (error) {
		res.json({ message: error.message });
	}
});

postRouter.get("/getallpost", async (req, res) => {
	try {
		const posts = await PostModel.find();
		res.json({ succes: true, posts });
	} catch (error) {
		res.json({ message: error.message });
	}
});

// comment on post
postRouter.post("/comment", async (req, res) => {
	try {
		const { postId, userId, comment } = req.body;
		const post = await PostModel.findById(postId);
		if (!post) {
			return res.json({ message: "post not found" });
		}
		post.comments.push({ userId, comment });
		await post.save();
		res.json({ message: "comment added successfully" });
	} catch (error) {
		res.json({ message: error.message });
	}
});

// delete post by id
postRouter.delete("/deletepost/:id", async (req, res) => {
	try {
		const { userId } = req.body;
		const { id } = req.params;
		const post = await PostModel.findOne({ _id: id, userId });
		if (!post) {
			return res.json({ message: "post not found" });
		}
		await PostModel.findByIdAndDelete(id);
		res.json({ message: "post deleted successfully" });
	} catch (error) {
		res.json({ message: error.message });
	}
});

module.exports = { postRouter };
