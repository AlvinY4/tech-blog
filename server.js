const path = require('path');
require('dotenv').config();
const routes = require('./controllers/');
const sequelize = require('./config/connection');

const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'super secret secret',
    cookie: {
        // Session will automatically expire in 10 minutes
        expires: 10 * 60 * 1000
  },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sess));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });



