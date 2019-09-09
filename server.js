const express = require("express");
const scheduler = require('./scheduler');
const routes = require("./routes/routes.js");
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require("./models");


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

scheduler.start();

//Add routes, both API and view
app.use(routes);

db.sequelize.sync({force:false}).then(function() {
  app.listen(PORT,() => 
    console.log(`🌎 ===> API Server now listening on PORT ${PORT}!`)
  )
});

