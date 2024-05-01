const express = require('express');
const workoutCtrl = require('../controllers/workouts')

const router = express.Router();

// GET all workouts
router.get('/', workoutCtrl.getWorkouts)
// GET a single workout
router.get('/:id', workoutCtrl.getOneWorkout)
// POST a new workout
router.post('/', workoutCtrl.create)
// DELETE a workout
router.delete('/:id', workoutCtrl.delete)
// UPDATE a workout
router.patch('/:id', workoutCtrl.update)

module.exports = router;