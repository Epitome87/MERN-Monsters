import express from 'express';
import Site from '../models/site.model.js';
import User from '../models/user.model.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const sites = await Site.find();
    res.json(sites);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/add').post(async (req, res) => {
  const { name, description } = req.body;
  const date = Date.parse(req.body.date);

  // TODO: Retrieve actual author (based on...user's name?) rather than hard-coded
  const authorId = await User.findOne({ username: 'Matthew' }).exec();

  const newSite = new Site({
    name,
    description,
    date,
    author: authorId._id,
  });

  try {
    const saveNewSite = await newSite.save();
    console.log(`New Site has been added on ${Date().toString()}`);
    res.json(`Site added successfully on ${Date().toString()}`);
  } catch (err) {
    res
      .status(400)
      .json(`Error attempting to add Site on ${Date().toString()}:` + err);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);
    res.json(site);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const site = await Site.findByIdAndDelete(req.params.id);
    res.json('Site deleted successfully!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/:id/edit').patch(async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);

    site.name = req.body.name;
    site.description = req.body.description;
    site.date = Date.parse(req.body.date);

    try {
      await site.save();
      res.json({ site, message: 'Site updated successfully!' });
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

export default router;
