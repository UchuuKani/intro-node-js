const userData = require("./data");

function getUserById(id, cb) {
  setTimeout(function () {
    const user = userData.users.find((user) => user.id == id);
    cb(user);
  }, 150);
}

function getPostsForUser(userId, cb) {
  setTimeout(function () {
    const posts = userData.posts.filter((post) => post.createdBy == userId);
    cb(posts);
  }, 150);
}

module.exports = {
  getUserById,
  getPostsForUser,
};
