const Workout = require('../models/workouts')
const mongoose = require('mongoose');

module.exports = {
    create,
    getWorkouts,
    getOneWorkout,
    'delete': deleteWorkout,
    update
}

// get all workouts
async function getWorkouts(req, res) {
    const workouts = await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts)
}

// get a single workout
async function getOneWorkout(req, res) {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({error: 'No such workout'});
    }

    res.status(200).json(workout)
}

// create new workout
async function create(req, res) {
    const {title, load, reps} = req.body;
    // add doc to db
    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
    res.json({msg: 'POST a new workout'})
}

// delete a workout
async function deleteWorkout(req, res) {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout) {
        return res.status(404).json({error: 'No such workout'});
    }

    res.status(200).json(workout);
}

// update a workout
async function update(req, res) {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({error: 'No such workout'});
    }

    res.status(200).json(workout);
}