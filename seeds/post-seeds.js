const { Post } = require('../models');

const postData = [
  {
    title: 'Mysql',
    post_content: 'MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses.',
    user_id: 1,
  },
  {
    title: 'Handlebars',
    post_content: 'A Javascript library used to create reusable webpage templates. The templates are combination of HTML, text, and expressions.',
    user_id: 2,
  },
  {
    title: 'Handlebars Partials',
    post_content: 'Partials are normal Handlebars templates that may be called directly by other templates.',
    user_id: 2,
  },
  {
    title: 'Cookies',
    post_content: 'Cookies are simple, small files/data that are sent to client with a server request and stored on the client side.',
    user_id: 3,
  },
  {
    title: 'Dotenv',
    post_content: 'Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env .',
    user_id: 4,
  },
  {
    title: 'Express.js',
    post_content: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;