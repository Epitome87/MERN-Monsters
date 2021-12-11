import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const users = await User.find();
    console.log('USERS:', users);
    res.json(users);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/add').post(async (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  try {
    const saveNewUser = await newUser.save();
    res.json('User added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

export default router;
