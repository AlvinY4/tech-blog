const { User } = require('../models');

const userData = [
  {
    username: "Adamj24",
    email: "Adam@gmail.com",
    password: "password1234"
  },
  {
    username: "Em_10",
    email: "Emily@gmail.com",
    password: "password1234"
  },
  {
    username: "lizzy67",
    email: "Elizabeth@gmail.com",
    password: "password1234"
  },
  {
    username: "liamb@89",
    email: "Liam@gmail.com",
    password: "password1234"
  },
  {
    username: "Jess_ica57",
    email: "Jessica@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;