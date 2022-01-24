const { User } = require('../models');

const userData = [
  {
    username: "Adamj24",
    password: "password1234"
  },
  {
    username: "Em_10",
    password: "password1234"
  },
  {
    username: "lizzy67",
    password: "password1234"
  },
  {
    username: "liamb@89",
    password: "password1234"
  },
  {
    username: "Jess_ica57",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;