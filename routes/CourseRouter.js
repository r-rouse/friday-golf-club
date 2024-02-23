const express = require('express');
const Router = express.Router(); // Use express.Router() directly
const controller = require('../controllers/Course');


Router.get('/test', (req, res) => {
    res.send('CourseRouter is accessible');
  });
  
Router.get('/', controller.GetAllCourse);
Router.get('/:id', controller.getCourseById);
Router.get('/:id/holes', controller.getHolesByCourseId);
Router.post('/', controller.CreateCourse);
Router.delete('/', controller.deleteAllCourses);

module.exports = Router;