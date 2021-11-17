const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
res.send("get all posts route");
}

exports.createNewPost = async (req, res, next) => {
    let {title, body} = req.body;
    let post = new Post(title, body);

    post = await post.save();

    console.log(post);

    res.send("create new post route");
}

exports.getPostById = async (req, res, next) => {
res.send("get post by id route");
}
