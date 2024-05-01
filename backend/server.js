require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const { default: mongoose } = require('mongoose');

// Express app
const app = express();

app.use(express.json());

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, function() {
    console.log(`Connected to db & listening on port ${process.env.PORT}`);
  });
  })
  .catch((error) => {
    console.log(error)
  });


