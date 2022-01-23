const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Wow! Thanks for the info!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Hello",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Learning MVC is so fun",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Cookies are delicious",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Hello, Everyone!",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "I need help soving a GitHub issue",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;