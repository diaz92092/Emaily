const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./models/User");
require("./models/Survey");
require("./services/passport");
mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI);
// require is needed when using common js modules

// es20 modules import syntax import express from 'express';
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  //like our main.js of main.css file
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// console.developers.google.com

// http://localhost:5000/auth/google
// http://localhost:5000/api/current_user

// passport.use says passport I want you to be aware that there is a new strategy availabe and I want you to use it
// this is a route handler with express
// app.get("/", (req, res) => {
//   res.send({ hi: "there" });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// this line instructs express to tell node to listen for incoming traffic to port 5000

// app Express app to register this route handler with
// '/' is the route portion of the handler
// req is the object requesting the incoming request
// res is the object requesting the outgoing response
// res.send({hi: 'there}) immediately send some JSON back to whoever made this request

// localhost:5000

// request methods
// (app.get: get info) Watch for incoming requests with this method
// (app.post: send info)
// (app.put: update all of the properties of something)
// (app.delete: delete something)
// (app.patch: update one or two properties of something)

// Stephin Grider Deployment checklist to use heroku
// Dynamic port binding
// Specify Node Environment
// Specify start script
// create .gitignore file

// hidden-mesa-48002
// https://hidden-mesa-48002.herokuapp.com/ | https://git.heroku.com/hidden-mesa-48002.git

//  npm install --save passport passport-google-oauth20
// "dev": "nodemon index.js" in package.json then npm run dev

// 1- Initialise with git: git init
// 2- Get the app name: heroku apps
// 3- Add remote:
// heroku git:remote -a your_app_name

// enable cookie
// npm install --save cookie-session

// git add .
// git commit -m "finished auth flow"
// git push heroku master

// npx create-react-app client
// npm install --save concurrently
// npm run dev

// npm install http-proxy-middleware

// cd client npm install -- save redux react-redux react-router-dom
// file name starts with capital letter if it will export module ie App.js
// npm run dev should be executed in server directory

// a route is a pairing of the address and the components displayed
// materialize css library
// webpack is a module loader it takes in a bunch of file and organizes them to spit out a few output files
// when working with react components we do not pass in css classes as the class property we use classname instead
// cd client npm install --save axios redux-thunk
// we define an react action as a javascript object with a type property and optionally with a payload
// redux thunk breaks the rule that requires every action creator to return an action
// with redux thunk action creator will produce an action that will go into the dispatch function
// thunk gives us direct access to dispatch function
// when referencing javascript in jsx use curly braces {}
// in common js we can use logic before require in es2015 we cant use any lgoci before import
// files like .env wont show up in mac os files
// npm install --save stripe
// npm install --save body-parser
// middle is deployed using app.use function
// npm run build in client dir
// webhook outside api facilitates some process then gives our app some kind of callback or notice that some event has occured
// sendgrid email app
// reduxform uses redux to help the surveyform communicate with the surveyformreview component
// reduxForm calls action creators and pulls data out of our store providing it for other components
// redux form helper allows reduxForm to communicate with our redux store
// reduxForm helper is almost identical to the connect helper but reduxForm only takes on argument form: ""
