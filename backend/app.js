const express = require("express");
const dotenv = require("dotenv");
const regRoute = require("./routes/userRoutes");
const carRoute = require("./routes/carRoutes");
const bookRoute = require("./routes/bookingRoutes");
const connectDB = require("./config/database");
const errorHandler = require("./middleware/error");
const session = require("express-session");
const passport = require("passport");
const pass = require("./middleware/passportAuth");
const cors = require("cors");
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
dotenv.config({ path: "config/config.env" });

// Sessions and Cookies
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Connect Database
connectDB();

// Passport Auth
pass();

app.use("/myapp", regRoute);
app.use("/myapp", carRoute);
app.use("/myapp", bookRoute);

//Middleware for errors

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// process.env.PORT
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
