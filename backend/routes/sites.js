import express from 'express';
import Site from '../models/site.model.js';

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

  const newSite = new Site({
    name,
    description,
    date,
  });

  try {
    const saveNewSite = await newSite.save();
    res.json('Site added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
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

router.route('/update/:id').post(async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);

    site.name = req.body.name;
    site.description = req.body.description;
    site.date = Date.parse(req.body.date);

    try {
      await site.save();
      res.json('Site updated successfully!');
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

export default router;
