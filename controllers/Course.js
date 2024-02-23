const { Course, Hole } = require('../models');



const GetAllCourse = async (req, res) => {
    try {
        const Courses = await Course.findAll({
            include: [{
                model: Hole,
                as: 'holes' // This should match the alias you used in the association definition
            }]
        });
        res.send(Courses);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


const CreateCourse = async (req, res) => {
    console.log(req)
    try {
      let newCourse = await Course.create(req.body);
      res.send(newCourse);
    } catch (error) {
      throw error;
    }
  };
  const getCourseById = async (req, res) => {
    try {
      const courseId = req.params.id;
      const course = await Course.findByPk(courseId, {
        include: [{
          model: Hole,
          as: 'holes',
          attributes: ['id', 'hole_number', 'par'], // Adjust attributes as needed
          order: [['hole_number', 'ASC']] // Optional: order holes by their number
        }]
      });
  
      if (!course) {
        return res.status(404).send({ message: 'Course not found.' });
      }
  
      res.json(course);
    } catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).send({ message: 'Error fetching course details.' });
    }
  };
  // Assuming you have a file like controllers/holeController.js

const getHolesByCourseId = async (req, res) => {
  try {
    const courseId = req.params.id;
    console.log(`Fetching holes for course ID: ${courseId}`);
    const course = await Course.findByPk(courseId, {
      include: [{
        model: Hole,
        as: 'holes',
        attributes: ['id', 'hole_number', 'par'], // Customize attributes as needed
        order: [['hole_number', 'ASC']] // Optional: order by hole number
      }]
    });

    if (!course) {
      return res.status(404).send({ message: 'Course not found.' });
    }

    res.json(course.holes); // Send back the holes associated with the course
  } catch (error) {
    console.error('Error fetching holes by course ID:', error);
    res.status(500).send({ message: 'Error fetching holes for the course.' });
  }
};

module.exports = {
  getHolesByCourseId,
};

  
  const deleteAllCourses = async (req, res) => {
    try {
        // Perform the deletion
        await Course.destroy({
            where: {}, // An empty where object will match all records
        });

        // Respond to the request indicating success
        res.status(200).send({
            message: "All courses have been deleted successfully."
        });
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error deleting courses: ", error);
        res.status(500).send({
            message: "An error occurred while trying to delete all courses."
        });
    }
};


module.exports = {
    GetAllCourse,
    CreateCourse,
    getCourseById,
    getHolesByCourseId,
    deleteAllCourses

}