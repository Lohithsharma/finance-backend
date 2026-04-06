const Record = require('../models/Record');

exports.createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      user: req.user.id
    });
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find({ user: req.user.id });
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};