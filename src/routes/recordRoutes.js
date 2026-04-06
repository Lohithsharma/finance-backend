const express = require('express');
const router = express.Router();

const { createRecord, getRecords } = require('../controllers/recordController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.post('/', protect, authorize('user', 'admin'), createRecord);
router.get('/', protect, authorize('user', 'admin'), getRecords);

module.exports = router;