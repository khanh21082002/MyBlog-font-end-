import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()
        console.log(posts)
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPosts = async (req, res) => {
    try {
        const newPost = req.body
        const post = new PostModel(newPost)
        await post.save()
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updatePosts = async (req, res) => {
    try {
        const updatedPost = req.body;
        const post = await PostModel.findByIdAndUpdate(
            { _id: updatePosts._id },
            updatedPost,
            { new: true }
        )
        res.json(post)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deletePosts = async (req, res) => {
    try {
        const deletePost = req.body;
        const post = await PostModel.findByIdAndDelete({ _id: deletePost._id })
        res.json(post)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
