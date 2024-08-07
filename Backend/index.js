const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const session = require("express-session");
const authRoutes = require('./Routes/authRoutes');
const userRoutes = require("./Routes/userRoutes");
const articleRoutes = require("./Routes/articleRoutes")
const config = require('./Config/config');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
var whitelist = ["http://localhost:4200", config.frontEnd]
app.use(cors({
  origin: whitelist,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(
    session({
      secret: "sdg2hoe2aa2sd3f3es4ag32wdg23trw4sed4f34s32fr", // Secret key for session
      resave: false,
      saveUninitialized: false, 
      store: MongoStore.create({
        mongoUrl: config.mongoURI,
        ttl: 1 * 24 * 60 * 60, 
      }),
      cookie: { 
          secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
          httpOnly: true, 
          maxAge: 1000 * 60 * 60 * 24,
          sameSite : "none"
      }, 
      // 1000 * 60 * 60 * 24 Max age in milliseconds (1 day)
    })
  );
  app.set('trust proxy', 1);

// Connect to MongoDB
mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    console.log(config.mongoURI)
// Routes
app.use('/auth', authRoutes);
app.use("/user", userRoutes); 
app.use("/article", articleRoutes)

app.listen(port, () => {
    console.log(process.env.NODE_ENV)
    console.log(`Server is running on http://localhost:${port}`);
});
