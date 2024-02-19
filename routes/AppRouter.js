
const express = require('express');
const router = express.Router(); // Creates a new router instance
const PlayerRouter = require('./PlayerRouter');
const CourseRouter = require('./CourseRouter');


router.use('/players', PlayerRouter);
router.use('/courses', CourseRouter);
router.get('/test', (req, res) => {
    res.send('AppRouter is working!');
  });

module.exports = router;
