import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const users = await User.find();
    console.log(`List of users`, users);
    res.json(users);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/add').post(async (req, res) => {
  const { username, biography, image } = req.body;
  const newUser = new User({ username, biography, image });

  try {
    const saveNewUser = await newUser.save();
    console.log(`New user has been added on ${Date().toString()}`);
    res.json(`User added successfully: ${saveNewUser}`);
  } catch (err) {
    console.log(`Failed to add user on ${Date().toString()}`);
    res.status(400).json('Error: ' + err);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('reviews');
    res.json(user);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/:id/edit').patch(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    // Retrieve the updated values for the user's properties
    const { username, biography, image } = req.body;

    // Update the user's properties with the sent values
    user.username = username;
    user.biography = biography;
    user.image = image;

    try {
      await user.save();
      res.json('User updated successfully!');
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

export default router;
